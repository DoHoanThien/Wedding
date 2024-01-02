import React, { memo, useState } from "react";
import Image from "next/image";
import { ALBULM_LST } from "@/config/other";
import ModalAlbumNoSSR from "./modalAlbum";

const Album = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleTogleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <section className="album">
      <div className="album__title">Album ảnh</div>
      <div className="album__content">
        {ALBULM_LST.map((a, i) => {
          return (
            <Image
              key={i}
              className="album__content__item"
              data-aos="zoom-in"
              onClick={handleTogleModal}
              src={a.src}
              alt={`album-pic--${i}`}
              width={0}
              height={0}
              priority
              unoptimized
              style={{ width: "100%", height: "100%" }}
            ></Image>
          );
        })}
      </div>
      <div className="logo-end"></div>

      <ModalAlbumNoSSR
        isOpenModal={isOpenModal}
        handleTogleModal={handleTogleModal}
      />
    </section>
  );
};

export default memo(Album);
