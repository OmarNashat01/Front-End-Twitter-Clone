import React from "react";
import WhatsHappeningBarCSS from "./../WhatsHappeningBar.module.css";

export const createOverLimitDecorator = (maxChars) => {

  
  function overLimitStrategy(contentBlock, callback) {
    const text = contentBlock.getText();
    const { length } = text;
    if (length >= maxChars) {
      callback(maxChars, length);
    }
  }

  return {
    strategy: overLimitStrategy,
    component: OverLimit
  };
};

function OverLimit({ children }) {
  return <span className={WhatsHappeningBarCSS.Editor__OverLimit}>{children}</span>;
}
