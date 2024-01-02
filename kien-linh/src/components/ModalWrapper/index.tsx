import dynamic from "next/dynamic";

export const ModalWrapper = dynamic(() => import("./ModalWrapper"), {
  ssr: false
});
