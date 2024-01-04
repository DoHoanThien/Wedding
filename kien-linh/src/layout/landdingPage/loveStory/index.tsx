import React, { memo } from "react";

const LoveStory = () => {
  return (
    <section className="love-story">
      <div className="love-story__title">Câu Chuyện Tình Yêu</div>

      <div className="love-story__body">
        <div className="time-line"></div>
        <div className="milestones">
          <div className="milestones__wrapper">
            <div className="milestones__top"></div>
            <div className="milestones__bottom">
              <div className="title"></div>
              <div className="date"></div>
              <div className="content"></div>
            </div>
          </div>
          <div className="milestones__wrapper">
            <div className="milestones__top"></div>
            <div className="milestones__bottom">
              <div className="title"></div>
              <div className="date"></div>
              <div className="content"></div>
            </div>
          </div>
          <div className="milestones__wrapper">
            <div className="milestones__top"></div>
            <div className="milestones__bottom">
              <div className="title"></div>
              <div className="date"></div>
              <div className="content"></div>
            </div>
          </div>
          <div className="milestones__wrapper">
            <div className="milestones__top"></div>
            <div className="milestones__bottom">
              <div className="title"></div>
              <div className="date"></div>
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LoveStory);
