import React, { memo } from "react";
import Typewriter from "typewriter-effect";

type propTypes = {};

const Banner = (props: propTypes) => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="banner__content">
          <h6
            className="banner__content--title"
            data-aos="fade-down-left"
            data-aos-anchor-placement="bottom-center"
          >
            Save the date
          </h6>
          <div className="banner__content--name">
            <Typewriter
              options={{
                strings: ["Hiếu Kiên & Huyền Linh"],
                autoStart: true,
                loop: true,
                delay: 180,
                deleteSpeed: 130
              }}
            />
          </div>

          <div
            className="banner__content--date"
            data-aos="fade-up-left"
            data-aos-anchor-placement="top-center"
          >
            <p>Ngày 04 Tháng 02 Năm 2024,</p>
            <p>nhằm Ngày 25 tháng 12 năm 2023 âm lịch</p>
          </div>
        </div>
        <div className="banner__button">
          <span className="icon"></span>
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
