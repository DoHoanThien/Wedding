import React, { memo } from "react";

const LoveStory = () => {
  return (
    <section className="love-story">
      <div className="love-story__title">Câu Chuyện Tình Yêu</div>
      <div className="love-story__body">
        <div className="flex-container">
          <div className="main-timeline">
            <div className="timeline left">
              <div className="card card-arrow__left" data-aos="fade-left">
                <div className="card-background"></div>
                <div className="img-container image-1"></div>
                <div className="card-body">
                  <p className="milestones">Ngày tỏ tình</p>
                  <p className="date">31, Tháng 03, 2020</p>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card card-arrow__right" data-aos="fade-right">
                <div className="card-background"></div>
                <div className="img-container image-2"></div>
                <div className="card-body">
                  <p className="milestones">Ngày cầu hôn</p>
                  <p className="date">26, Tháng 08, 2023</p>
                </div>
              </div>
            </div>
            <div className="timeline left">
              <div className="card card-arrow__left" data-aos="fade-left">
                <div className="card-background"></div>

                <div className="img-container image-3"></div>
                <div className="card-body">
                  <p className="milestones">Ngày dạm ngõ</p>
                  <p className="date">16, Tháng 09, 2023</p>
                </div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card card-arrow__right" data-aos="fade-right">
                <div className="card-background"></div>
                <div className="img-container image-4"></div>
                <div className="card-body">
                  <p className="milestones">Ngày đính hôn</p>
                  <p className="date">03, Tháng 10, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LoveStory);
