import dynamic from "next/dynamic";

const ModalAlbumNoSSR = dynamic(() => import("./ModalAlbum"), {
  ssr: false
});

export default ModalAlbumNoSSR;
