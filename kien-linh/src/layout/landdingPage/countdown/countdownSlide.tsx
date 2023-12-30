const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <div className="arrow">Next</div>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      <div className="arrow">Prev</div>
    </div>
  );
};

const CustomPaging = () => {
  return <div className="slick__dot--custom"></div>;
};

export { NextArrow, PrevArrow, CustomPaging };
