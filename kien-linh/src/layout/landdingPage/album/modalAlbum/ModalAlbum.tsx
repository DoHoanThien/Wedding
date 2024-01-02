import * as React from "react";
import ModalWrapper from "@/components/ModalWrapper";
import Slider, { Settings } from "react-slick";
import { ALBULM_LST } from "@/config/other";
import Image from "next/image";
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
    <ModalWrapper
      className="album__modal"
      isShow={isOpenModal}
      onTogle={handleTogleModal}
    >
      <Slider {...settings} className="album-slides">
        {ALBULM_LST.map((a, i) => (
          <div key={i} className="album-slides__item">
            <Image
              key={i}
              className="album__content__item"
              src={a.src}
              alt={`album-pic--${i}`}
              width={0}
              height={0}
              priority
              unoptimized
              style={{ width: "100%", height: "100%" }}
            ></Image>
          </div>
        ))}
      </Slider>
    </ModalWrapper>
  );
};

export default ModalAlbum;
