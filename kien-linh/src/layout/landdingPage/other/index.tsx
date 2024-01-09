import React, { memo } from "react";

const Other = () => {
  return (
    <section className="comment">
      <div className="comment__res"></div>
      <div className="comment__note">
        <div className="comment">
          <textarea
            cols={45}
            rows={8}
            placeholder="Gửi lời chúc đến đôi uyên ương"
            aria-required="true"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default memo(Other);
