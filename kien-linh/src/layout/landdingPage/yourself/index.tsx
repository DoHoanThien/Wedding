import React, { memo } from "react";

const Yourself = () => {
  return (
    <section className="yourself">
      <div className="yourself__groom" data-aos="zoom-in-left">
        <div className="yourself__groom--image">Hình 02</div>
        <div className="yourself__groom--name">Kiên</div>
        <div className="yourself__groom--full-name">Lê Hữu Huỳnh Hiếu Kiên</div>
        <div className="yourself__groom--line"></div>
      </div>
      <div className="yourself__bride" data-aos="zoom-in-left">
        <div className="yourself__bride--image">Hình 03</div>
        <div className="yourself__bride--name">Linh</div>
        <div className="yourself__bride--full-name">Hoàng Vũ Huyền Linh</div>
        <div className="yourself__groom--line"></div>
      </div>
    </section>
  );
};

export default memo(Yourself);
