import React, { memo } from "react";

type propTypes = {};

const Album = (props: propTypes) => {
  return <section className="album">Album</section>;
};

export default memo(Album);
