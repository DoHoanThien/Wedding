import React, { memo } from "react";
import Banner from "./banner";
import Introduction from "./introduction";
import Yourself from "./yourself";
import Countdown from "./countdown";
import Album from "./album";
import Other from "./other";
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
      <Other />

      <audio controls loop autoPlay>
        <track kind="captions" />
        <source
          src="https://wedding-alpha-five.vercel.app/audio.mp3"
          type="audio/mp3"
        />
      </audio>
      <section className="special-thanks">
        <div className="image image-left"></div>
        <div className="image image-right"></div>
      </section>
    </div>
  );
};

export default memo(LanddingPage);
