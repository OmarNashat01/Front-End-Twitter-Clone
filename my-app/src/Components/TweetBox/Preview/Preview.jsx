import React from "react";
import { useForm } from "usetheform";
import { PreviewURL } from "./components/PreviewURL";
import { PreviewMedia } from "./components/PreviewMedia";
import "./Preview.css";

export const Preview = () => {
  const { state } = useForm();
  const hidePreviewURL = state?.media !== undefined;
  return (
    <div className="Preview__Wrapper">
      {!hidePreviewURL && <PreviewURL />}
      <PreviewMedia />
    </div>
  );
};
