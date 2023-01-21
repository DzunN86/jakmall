import styled from "styled-components";
import { colors } from "../../themes";

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
// Styled Checkbox
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  background-color: #fff;
  border: 2px solid #1bd97b;
  border-radius: 4px;
  cursor: pointer;
  height: 20px;
  outline: none;
  position: relative;
  transition: 0.3s;
  width: 20px;

  :checked {
    background-color: #1bd97b;
    border: 1px solid #1bd97b;
  }

  // Icon Check
  :checked::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 6px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const CheckboxLabel = styled.label`
  color: ${colors.darkGray};
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
`;
