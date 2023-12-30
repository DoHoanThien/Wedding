import React, { ReactNode } from "react";
import { Modal } from "reactstrap";

type propTypes = {
  isShow: boolean;
  onTogle: () => void;
  children?: ReactNode;
  className?: string;
};

const ModalWrapper = (props: propTypes) => {
  const { isShow, onTogle, children, className } = props;

  return (
    <Modal
      className={`modal-wrapper ${className}`}
      centered
      isOpen={isShow}
      toggle={onTogle}
    >
      <span className="btn btn-close" onClick={onTogle}></span>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
