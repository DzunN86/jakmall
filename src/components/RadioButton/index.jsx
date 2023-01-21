import React from "react";
import { RadioInput, RadioLabel, RadioWrapper } from "./radioButton.style";

function RadioButton({ name, label1, label2 }) {
  return (
    <>
      <RadioInput id={name} name={name} />
      <RadioWrapper htmlFor={name}>
        <RadioLabel>{label1}</RadioLabel>
        <RadioLabel bold>{label2}</RadioLabel>
      </RadioWrapper>
    </>
  );
}

export default RadioButton;
