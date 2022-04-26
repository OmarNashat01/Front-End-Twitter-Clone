import React from "react";
import { Collection, Input } from "usetheform";
import { DraftEditor } from "./DraftEditor";
import { extractPlainText } from "./utils/extractPlainText";
import { limitTo } from "./utils/limitTo";
import WhatsHappeningBarCSS from "./WhatsHappeningBar.module.css";

export const WhatsHappeningBar = ({ maxChars }) => {
  return (
    <div className={WhatsHappeningBarCSS.WhatsHappeningBar}>
      <Collection
        object
        name="editor"
        validators={[limitTo(maxChars)]}
        reducers={extractPlainText}
      >
        <DraftEditor name="editorState" maxChars={maxChars} />
        <Input data-testid="tweetinput-1" type="hidden" name="plainText" />
      </Collection>
    </div>
  );
};
