import { isEmpty } from "lodash";
import React, { memo, useMemo, useState } from "react";

const Comment = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const isSubmit = useMemo(() => {
    return !isEmpty(name) && !isEmpty(comment);
  }, [comment, name]);

  return (
    <section className="comment">
      <div className="comment__title">Gửi Lời Yêu Thương</div>
      <div className="comment__note">
        <div className="comment__res"></div>
        <form className="comment__form" action="">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Tên"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="floatingInput">Tên người gửi</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style={{ height: "100px" }}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
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
