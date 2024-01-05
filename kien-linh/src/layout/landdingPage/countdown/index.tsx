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
            chúng tôi. Sự hiện diện của quý khách là niềm hạnh phúc của gia đình
            chúng tôi
          </p>
        </div>
        <div className="countdown__address">
          <section
            className="countdown__address__bride"
            data-aos="zoom-out-left"
          >
            <CountdownClock endTime={1707066000000} />
            <p className="date">Nhà Trai, 17:00, Chủ Nhật</p>
            <p className="day">04</p>
            <p className="month">Tháng Hai</p>
            <p className="year">2024</p>
            <p className="address">
              61/12 Võ Tùng, P. Trần Hưng Đạo, TP Quảng Ngãi
            </p>
            <div className="bg bg-top"></div>
            <div className="bg bg-bottom"></div>
          </section>

          <section
            className="countdown__address__groom"
            data-aos="zoom-out-right"
          >
            <CountdownClock endTime={1706952600000} />
            <p className="date">Nhà Gái, 9:30, Thứ 7</p>
            <p className="day">03</p>
            <p className="month">Tháng Hai</p>
            <p className="year">2024</p>
            <p className="address">
              Đường Phạm Văn Đồng, TT Mộ Đức, Mộ Đức, Quảng Ngãi
            </p>
            <div className="bg bg-top"></div>
            <div className="bg bg-bottom"></div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default memo(Countdown);
