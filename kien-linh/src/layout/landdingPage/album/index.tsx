import React, { memo, useState } from "react";
import ModalWrapper from "@/components/ModalWrapper";
import { ALBULM_LST } from "@/config/other";
import Slider, { Settings } from "react-slick";
import {
  CustomPaging,
  NextArrow,
  PrevArrow
} from "../countdown/countdownSlide";

const AlbumSlides = memo(() => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: false,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: CustomPaging
  };

  return (
    <Slider {...settings} className="album-slides">
      {ALBULM_LST.map((a, i) => (
        <div key={i} className="album-slides__item">
          Hình {a}
        </div>
      ))}
    </Slider>
  );
});

const Album = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleTogleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <section className="album">
      <div className="album__title">Album ảnh</div>
      <div className="album__content">
        {ALBULM_LST.map((a: string, i: number) => {
          return (
            <div
              key={i}
              className="album__content__item"
              data-aos="zoom-in"
              onClick={handleTogleModal}
            >
              Hình {a}
            </div>
          );
        })}
      </div>
      <div className="logo-end"></div>

      <ModalWrapper
        className="album__modal"
        isShow={isOpenModal}
        onTogle={handleTogleModal}
      >
        <AlbumSlides />
      </ModalWrapper>
    </section>
  );
};

export default memo(Album);
