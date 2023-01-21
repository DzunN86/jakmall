import styled from "styled-components";
import { colors } from "../../themes";

const FormFloating = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 350px; */
  position: relative;
  /* margin-bottom: 1rem; */
  width: 100%;
  /* height: 100px; */
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 12px;
  color: ${(props) => (props.error ? colors.error : "#999")};
  pointer-events: none;
  position: absolute;
  transform: translate(0, 26px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;

const FormInput = styled.textarea`
  /* width: 100%; */
  height: 56px;
  padding: 30px 16px 0 10px;
  outline: 0;
  border: 1px solid ${(props) => (props.error ? colors.error : "#ccc")};
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;

  &:focus {
    border-color: ${(props) => (props.error ? colors.error : colors.primary)};
  }

  &::placeholder {
    visibility: hidden;
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    transform: translate(0, 12px) scale(0.75);
  }
`;

const FormError = styled.span`
  color: #d50000;
  font-size: 12px;
  margin-top: 4px;
`;

const FormCounter = styled.span`
  color: #999;
  font-size: 12px;
  margin-top: 4px;
  text-align: right;
`;

export { FormFloating, FormLabel, FormInput, FormError, FormCounter };
