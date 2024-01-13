import React, { memo } from "react";
import Banner from "./banner";
import Introduction from "./introduction";
import Yourself from "./yourself";
import Countdown from "./countdown";
import Album from "./album";
import Comment from "./comment";
import LoveStory from "./loveStory";

const LanddingPage = () => {
  return (
    <div className="landding-page">
      <Banner />
      <Introduction />
      <LoveStory />
      <Yourself />
      <Countdown />
      <Album />
      <Comment />

      <audio loop autoPlay>
        <track kind="captions" />
        <source
          src="https://wedding-alpha-five.vercel.app/audio.mp3"
          type="audio/mp3"
        />
      </audio>

      <section className="special-thanks">
        <div className="special-thanks__title">Lời Cảm Ơn</div>
        <div className="special-thanks__content">
          Thay mặt hai bên gia đình, Hiếu Kiên & Huyền Linh xin cảm ơn sự có mặt
          và chúc phúc của quý khách. Chúc quý khách luôn vui vẻ, khoẻ mạnh và
          thành công trong cuộc sống.
        </div>
        <div className="image"></div>
      </section>
    </div>
  );
};

export default memo(LanddingPage);
