import Image from "next/image";
import React, { memo } from "react";
import logoBG from "@/assets/logo/logo-BG.png";

const Introduction = () => {
  return (
    <section id="introduction" className="introduction">
      <div className="introduction__content">
        <Image
          src={logoBG}
          className="logo-bg"
          width={300}
          height={100}
          alt=""
        ></Image>
        <div className="speech" data-aos="fade-down-right">
          <p className="speech__text">
            Lần đầu gặp em anh nghĩ
            <br />
            anh đã lựa chọn gặp đúng người,
            <br /> Nhưng cuộc sống đã cho anh biết
            <br /> em không phải sự lựa chọn
            <br /> mà là ưu tiên của cuộc đời anh!
          </p>
          <p className="speed-author">- Hiếu Kiên -</p>
        </div>
      </div>
      <div className="introduction__picture" data-aos="fade-up-left">
        {/* demo */}
        <p
          className="notePicture"
          style={{ marginTop: "200px", fontSize: "32px", opacity: ".5" }}
        >
          Hình 01
        </p>
        {/* demo */}
      </div>
      <div className="introduction__logo-end"></div>
    </section>
  );
};

export default memo(Introduction);
