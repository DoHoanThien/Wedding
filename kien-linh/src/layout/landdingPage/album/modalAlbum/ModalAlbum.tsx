import * as React from "react";
import ModalWrapper from "@/components/ModalWrapper";
import Slider, { Settings } from "react-slick";
import { ALBULM_LST } from "@/config/other";
import {
  CustomPaging,
  NextArrow,
  PrevArrow
} from "../../countdown/countdownSlide";

type propTypes = {
  isOpenModal: boolean;
  handleTogleModal: () => void;
};

const ModalAlbum = (props: propTypes) => {
  const { isOpenModal, handleTogleModal } = props;

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: CustomPaging
  };

  return (
    <ModalWrapper
      className="album__modal"
      isShow={isOpenModal}
      onTogle={handleTogleModal}
    >
      <Slider {...settings} className="album-slides">
        {ALBULM_LST.map((a, i) => (
          <div className="album-slides__item" key={`modal-${i}`}>
            <img
              src={a.src}
              alt={`modal-pic--${i}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </Slider>
    </ModalWrapper>
  );
};

export default ModalAlbum;
