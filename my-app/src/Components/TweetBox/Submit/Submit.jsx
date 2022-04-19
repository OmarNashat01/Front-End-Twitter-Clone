import React from "react";
import { useForm } from "usetheform";
import SubmitCSS from "./Submit.module.css";

export const Submit = () => {

//  isValid: a boolean value indicating whether the form has passed all the validation constraints or not.
// pristine: a boolean value indicating whether the form fields have been modified or not.
  const { isValid, pristine, state } = useForm();
  
  const isEmpty = !state.editor?.plainText && !state.media && !state.gif;
  return (
    <button
      disabled={!isValid || pristine || isEmpty}
      type="submit"
      className={SubmitCSS.Submit}
    >
      <span>Tweet</span>
    </button>
  );
};
