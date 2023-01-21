import React from "react";
import { rupiahFormat } from "../../utils";
import { RadioInput, RadioLabel, RadioWrapper } from "./radioButton.style";

function RadioButton({ id, name, label1, label2 }) {
  return (
    <>
      <RadioInput id={id} name={name} />
      <RadioWrapper htmlFor={id}>
        <RadioLabel>{label1}</RadioLabel>
        {label2 && <RadioLabel bold>{rupiahFormat(label2)}</RadioLabel>}
      </RadioWrapper>
    </>
  );
}

export default RadioButton;
