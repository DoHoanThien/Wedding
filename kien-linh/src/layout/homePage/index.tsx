import React, { memo } from "react";

type propTypes = {
  onChangePage: () => void;
};

const HomePage = (props: propTypes) => {
  const { onChangePage } = props;

  return (
    <div className="home-page">
      <div className="container" style={{ position: "relative" }}>
        <div
          className="home-page__title"
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
        >
          <p className="invitation">
            Trân trọng kính mời đến với buổi tiệc cưới
          </p>
          <h1 className="protagonist-name">Hiếu Kiên & Huyền Linh</h1>
        </div>
        <button className="home-page__button" onClick={onChangePage}>
          <span className="icon"></span>
          <span className="text">Mở Thiệp</span>
        </button>
      </div>
    </div>
  );
};

export default memo(HomePage);
