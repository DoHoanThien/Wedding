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
                <div className="img-container image-1">image 1</div>
                <div className="card-body">content 1</div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card card-arrow__right" data-aos="fade-right">
                <div className="img-container image-2">image 2</div>
                <div className="card-body">content 2</div>
              </div>
            </div>
            <div className="timeline left">
              <div className="card card-arrow__left" data-aos="fade-left">
                <div className="img-container image-1">image 3</div>
                <div className="card-body">content 3</div>
              </div>
            </div>
            <div className="timeline right">
              <div className="card card-arrow__right" data-aos="fade-right">
                <div className="img-container image-2">image 4</div>
                <div className="card-body">content 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LoveStory);
