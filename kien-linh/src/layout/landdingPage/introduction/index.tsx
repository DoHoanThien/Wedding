import React, { memo } from "react";
import Image from "next/image";
import logoBG from "@/public/static/assets/images/logo-bg.png";

const Introduction = () => {
  return (
    <section id="introduction" className="introduction">
      <div className="introduction__content">
        <div className="logo-bg">
          <Image src={logoBG} width={300} height={100} alt="logo-BG" />
        </div>
        <div className="speech" data-aos="fade-down-right">
          <p className="speech__text">
            Gặp nhau vào một ngày cuối Xuân,
            <br /> bên nhau Xuân, Hạ, Thu
            <br /> rồi nên duyên vào một ngày cuối Đông.
            <br /> Từ nay, Đông có nắng ấm, Hạ có gió mát,
            <br /> còn chúng mình có nhau.
          </p>
          <p className="speech__author">- Hiếu Kiên - Huyền Linh -</p>
        </div>
      </div>
      <div className="introduction__picture" data-aos="fade-up-left"></div>
      <div className="logo-end"></div>
    </section>
  );
};

export default memo(Introduction);
