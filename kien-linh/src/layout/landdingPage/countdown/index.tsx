import CountdownClock from "@/components/CountdownClock";
import React, { memo } from "react";

const Countdown = () => {
  return (
    <section className="countdown">
      <div className="countdown__content" data-aos="zoom-in">
        <h2 className="countdown__content--title">
          Cùng đếm ngược ngày trọng đại
        </h2>
        <CountdownClock endTime={1707045071000} />
        <button className="countdown__content--button">
          <span className="icon"></span>
          <span className="text">Thêm vào lịch</span>
        </button>
        <p className="countdown__content--invitation">
          Trân trọng kính mời mọi người đến dự tiệc chung vui cùng gia đình
          chúng tôi Sự hiện diện của quý khách là niềm hạnh phúc của gia đình
          chúng tôi
        </p>
      </div>
      <div className="countdown__address" data-aos="zoom-in-right">
        <p className="countdown__address--day">
          Ngày 04, Tháng 02, Năm 2024, Nhằm Ngày 25, Tháng 12, Âm Lịch, Năm 2023
          <br />
          Quảng Ngãi, Việt Nam
        </p>
        <button className="countdown__address--button">
          <span className="icon"></span>
          <span className="text">Chỉ đường</span>
        </button>
        <div className="countdown__address--banner" data-aos="flip-left">
          <div className="image">Hình 04</div>
        </div>
      </div>
    </section>
  );
};

export default memo(Countdown);
