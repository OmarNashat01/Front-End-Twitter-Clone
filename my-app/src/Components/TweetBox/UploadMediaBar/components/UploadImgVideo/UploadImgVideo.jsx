import React from "react";
import { Input } from "usetheform";
import UpladImgSVG from "./../../../../../assets/uploadimages.svg";
import UploadImgVideoCSS from"./UploadImgVideo.module.css";

export const UploadImgVideo = ({ disabled }) => {
  return (
    <label
      data-disabled={disabled}
      className={UploadImgVideoCSS.UploadMediaBar__Input}
      htmlFor="media"
    >
      <img alt="Upload" src={UpladImgSVG} />
      <Input disabled={disabled} type="file" multiple name="media" id="media" />
    </label>
  );
};
