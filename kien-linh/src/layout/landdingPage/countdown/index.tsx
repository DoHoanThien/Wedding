import CountdownClock from "@/components/CountdownClock";
import React, { memo } from "react";

const Countdown = () => {
  return (
    <section className="countdown">
      <div className="countdown-wrapper">
        <div className="countdown__content" data-aos="zoom-in">
          <h2 className="countdown__content--title">
            Cùng đếm ngược ngày trọng đại
          </h2>
          <p className="countdown__content--invitation">
            Trân trọng kính mời mọi người đến dự tiệc chung vui cùng gia đình
            chúng tôi Sự hiện diện của quý khách là niềm hạnh phúc của gia đình
            chúng tôi
          </p>
        </div>
        <div className="countdown__address">
          <section
            className="countdown__address__groom"
            data-aos="zoom-out-right"
          >
            <CountdownClock endTime={1706958000000} />
            <p className="date">Thứ 7</p>
            <p className="day">03</p>
            <p className="month">Tháng Hai</p>
            <p className="year">2024</p>
            <button className="countdown__address--button">
              <span className="icon"></span>
              <span className="text">Chỉ đường</span>
            </button>
            <div className="bg"></div>
            <div className="bg"></div>
          </section>

          <section
            className="countdown__address__bride"
            data-aos="zoom-out-left"
          >
            <CountdownClock endTime={1707044400000} />
            <p className="date">Chủ Nhật</p>
            <p className="day">04</p>
            <p className="month">Tháng Hai</p>
            <p className="year">2024</p>
            <button className="countdown__address--button">
              <span className="icon"></span>
              <span className="text">Chỉ đường</span>
            </button>
            <div className="bg"></div>
          </section>

          {/* <div className="countdown__address--banner" data-aos="flip-left">
            <div className="image"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default memo(Countdown);
