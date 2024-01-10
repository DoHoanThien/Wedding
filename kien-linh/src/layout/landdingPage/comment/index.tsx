import React, {
  ChangeEvent,
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import { get, isEmpty } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { getComment, postComment } from "@/services";

export type formCommentType = {
  name: string;
  comment: string;
};

const Comment = () => {
  const [dataComment, setDataComment] = useState([]);
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmit) {
      const formData = {
        username: form.name,
        text: form.comment
      };
      postComment(formData);
      setForm({ name: "", comment: "" });
    }
  };

  const initData = useCallback(async () => {
    const data = await getComment();
    setDataComment(get(data, "data"));
  }, []);

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <section className="comment">
      <div className="comment__title">Gửi Lời Yêu Thương</div>
      <div className="comment__note">
        <div id="#response-comment" className="comment__res">
          <InfiniteScroll
            dataLength={dataComment.length}
            next={initData}
            hasMore
            loader={<p>Loading...</p>}
            scrollableTarget="#response-comment"
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {dataComment?.map((d, i) => (
              <div key={i} className="comment__res__item">
                test
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
    </section>
  );
};

export default memo(Comment);
