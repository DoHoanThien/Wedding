import Link from "next/link";
import React, { memo } from "react";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="banner" style={{ position: "relative" }}>
      {/* demo */}
      <p
        style={{
          position: "absolute",
          width: "100%",
          top: "50%",
          textAlign: "center",
          fontSize: "32px",
          opacity: "0.5"
        }}
      >
        Background 02 1tấm desktop, 1tấm mobile
      </p>
      {/* demo */}

      <div className="banner-wrapper">
        <div className="banner__content">
          <h6 className="banner__content--title" data-aos="fade-down-left">
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

          <div className="banner__content--date" data-aos="fade-up-left">
            <p>Ngày 04 Tháng 02 Năm 2024,</p>
            <p>nhằm Ngày 25 tháng 12 năm 2023 âm lịch</p>
          </div>
        </div>
        <div className="banner__button">
          <Link className="icon" href="#introduction"></Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
