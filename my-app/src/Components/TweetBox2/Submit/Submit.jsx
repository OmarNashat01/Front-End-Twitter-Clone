import React, { useEffect } from "react";
import { useForm } from "usetheform";
import SubmitCSS from "./Submit.module.css";

import { EditorState, ContentState } from 'draft-js';

export const Submit = ({ OnSubmit }) => {

  //  isValid: a boolean value indicating whether the form has passed all the validation constraints or not.
  // pristine: a boolean value indicating whether the form fields have been modified or not.
  const { reset, isValid, pristine, state } = useForm();
  const isEmpty = !state.editor?.plainText && !state.media;

  useEffect(() => {
    reset();
  }, [OnSubmit])

  return (
    <button
      disabled={!isValid || pristine || isEmpty}
      type="submit"
      className={SubmitCSS.Submit}
    >
      <span>Reply</span>
    </button>
  );
};
