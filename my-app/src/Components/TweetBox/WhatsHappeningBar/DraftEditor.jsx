import React, { useCallback, useMemo, useRef } from "react";
import { composeDecorators } from "./utils/composeDecorators";
import { useField } from "usetheform";
import { Editor, EditorState } from "draft-js";

import WhatsHappeningBarCSS from "./WhatsHappeningBar.module.css";
import "./DraftEditor.css";


export const DraftEditor = ({ maxChars, name = "editorState" }) => {
//   What is useMemo? 
// The useMemo hook is used in the functional component of React to return a memoized value.

// Purpose of useMemo
// In computer science, memoization is a concept used in general when we can save re-compilation time by returning the cached result. In the functional component of React, useMemo hooks provide memory-mapped values.
// Using useMemo when very little processing is involved is not really wise. In cases with very little processing, using it could add extra overhead. However, useMemo works well to avoid extra rendering unnecessarily.
  
  const initialState = useMemo(
    () => EditorState.createEmpty(composeDecorators(maxChars)),
    [maxChars]
  );

  const { value, setValue } = useField({
    type: "custom",
    name,
    value: initialState
  });

//   What is useCallback?
// The useCallback hook is used when a child component is rerendering over and over again without any need. 
// Purpose of useCallback
// By using useCallback, you can prevent unnecessarily re-rendering components by returning the same instance of the function that is passed instead of creating a new one each time.
  const onInputChange = useCallback((editorState) => setValue(editorState), [
    setValue
  ]);

  /* 
     field used to hold the draft's ref 
     within the form state in order to be easly
     accessible from external form's fields (Input, Collection etc..) 
  */
  const refEditor = useRef(null);
  useField({
    type: "custom",
    name: "refEditor",
    value: refEditor
  });

  

  return (
    <div className={WhatsHappeningBarCSS.Editor}>
      <Editor
        ref={refEditor}
        editorState={value}
        onChange={onInputChange}
        placeholder="What’s happening?"
      />
    </div>
  );
};
