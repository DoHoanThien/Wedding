import React, { memo } from "react";
import Banner from "./banner";
import Introduction from "./introduction";
import Yourself from "./yourself";
import Countdown from "./countdown";
import Album from "./album";
import Other from "./other";

type propTypes = {};

const LanddingPage = (props: propTypes) => {
  return (
    <div className="landding-page">
      <Banner />
      <Introduction />
      <Yourself />
      <Countdown />
      <Album />
      <Other />

      <section className="special-thanks">Special Thanks</section>
    </div>
  );
};

export default memo(LanddingPage);
