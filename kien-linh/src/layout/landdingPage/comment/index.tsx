import React, {
  ChangeEvent,
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { ToastContainer, toast } from "react-toastify";
import { get, isEmpty } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { getComment, postComment } from "@/services";

type formCommentType = {
  name: string;
  comment: string;
};

type dataCommentType = {
  username?: string;
  text?: string;
};

export type lastKeyType = string | null;

const Comment = () => {
  const commentRef = useRef<HTMLDivElement>(null);
  const [dataComment, setDataComment] = useState<dataCommentType[]>([]);
  const [lastKey, setLastKey] = useState<lastKeyType>("");
  const [form, setForm] = useState<formCommentType>({
    name: "",
    comment: ""
  });

  const isSubmit = useMemo(() => {
    return !isEmpty(form.name) && !isEmpty(form.comment);
  }, [form.comment, form.name]);

  const formHandler = useCallback(
    (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({
        ...form,
        [evt.target.name]: evt.target.value
      });
    },
    [form]
  );

  const initData = useCallback(async () => {
    const res = await getComment(null);
    const dataGet = get(res, "data");
    const _lastKey = get(res, "lastKey");

    setLastKey(_lastKey);
    setDataComment(dataGet);
  }, []);

  const updateData = useCallback(async (key: lastKeyType) => {
    const res = await getComment(key);
    const dataGetUpdate = get(res, "data");
    const _lastKey = get(res, "lastKey");

    setLastKey(_lastKey);
    setDataComment((prev) => [...prev, ...dataGetUpdate]);
  }, []);

  const resetComment = useCallback(() => {
    setForm({ name: "", comment: "" });
    setLastKey(null);
    commentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmit) {
      const formData = {
        username: form.name,
        text: form.comment
      };

      const dataPost = await postComment(formData);

      if (dataPost.ok) {
        toast.success("Gửi Đi Lời Yêu Thương", {
          position: toast.POSITION.TOP_RIGHT,
          icon: <span className="heart-toast"></span>
        });

        setDataComment([]);
        initData();
        resetComment();
      }
    }
  };

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <section className="comment">
      <div className="comment__title">Gửi Lời Yêu Thương</div>
      <div className="comment__note">
        <div ref={commentRef} id="#response-comment" className="comment__res">
          <InfiniteScroll
            className="comment-list"
            dataLength={dataComment?.length}
            next={() => updateData(lastKey)}
            hasMore={!!lastKey}
            loader={<span>...</span>}
            scrollableTarget="#response-comment"
          >
            {dataComment?.map((d, i) => (
              <div key={i} className="comment__res__item">
                <div className="user-name">{d.username}</div>
                <div className="content">{d.text}</div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
        <form className="comment__form" onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Tên"
              name="name"
              value={form.name}
              onChange={formHandler}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="floatingInput">Tên người gửi</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="comment"
              id="floatingTextarea"
              style={{ height: "100px" }}
              value={form.comment}
              onChange={formHandler}
            ></textarea>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="floatingTextarea">Nội dung lời chúc</label>
          </div>
          <button
            type="submit"
            className={`button ${isSubmit ? "" : "disabled"}`}
          >
            Gửi lời chúc
          </button>
        </form>
      </div>
      <ToastContainer autoClose={2000} />
    </section>
  );
};

export default memo(Comment);
