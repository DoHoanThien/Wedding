import React, { memo } from "react";
import { ALBULM_LST } from "@/config/other";

const Album = () => {
  return (
    <section className="album">
      <div className="album__title">Album ảnh</div>
      <div className="album__content">
        {ALBULM_LST.map((a: string, i: number) => {
          return (
            <div key={i} className="album__content__item" data-aos="zoom-in">
              Hình {a}
            </div>
          );
        })}
      </div>
      <div className="logo-end"></div>
    </section>
  );
};

export default memo(Album);
