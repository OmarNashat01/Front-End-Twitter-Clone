import React from "react";
import { useSelector } from "usetheform";
import { ProgressRingBar } from "../ProgressRingBar/ProgressRingBar";
import { getProgressRingBarProps } from "./utils/getProgressRingBarProps";
import CharacterCounterCSS from"./CharacterCounter.module.css";

export const CharacterCounter = ({ maxChars }) => {
  const [plainText] = useSelector((state) => state.editor.plainText);

  const { uiStatus, ...propsRingBar } = getProgressRingBarProps(
    plainText,
    maxChars
  );

  return (
    <div data-ui={uiStatus} className={CharacterCounterCSS.ProgressRingBar}>
      <ProgressRingBar {...propsRingBar} />
    </div>
  );
};
