import React from "react";
import { useForm } from "usetheform";
import { UploadImgVideo } from "./components/UploadImgVideo/UploadImgVideo";
// import { UploadGif } from "./components/UploadGif/UploadGif";
import { EmojiPicker } from "./components/EmojiPicker/EmojiPicker";

import UploadMediaBarCSS from"./UploadMediaBar.module.css";

export const UploadMediaBar = () => {
  const { state } = useForm();
  const disableUploadGif = state.media !== undefined;
  const disableUploadImgVideo = state.gif !== undefined;
  return (
    <div className={UploadMediaBarCSS.UploadMediaBar}>
      <UploadImgVideo disabled={disableUploadImgVideo} />
      {/* <UploadGif disabled={disableUploadGif} /> */}
      <EmojiPicker />
    </div>
  );
};
