import React, { memo } from "react";
import Banner from "./banner";
import Introduction from "./introduction";
import Yourself from "./yourself";
import Countdown from "./countdown";
import Album from "./album";
import Other from "./other";

const LanddingPage = () => {
  return (
    <div className="landding-page">
      <Banner />
      <Introduction />
      <Yourself />
      <Countdown />
      <Album />
      <Other />

      <audio loop autoPlay>
        <track kind="captions" />
        <source
          src="https://invistory.com/wp-content/uploads/2021/09/The-Wedding-of-Handrian-Fransiska-Audio-Invistory-Bikin-Undangan-Digital.mp3"
          type="audio/mp3"
        />
      </audio>
      <section className="special-thanks">Special Thanks</section>
    </div>
  );
};

export default memo(LanddingPage);
