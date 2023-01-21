import styled from "styled-components";
import { colors } from "../../themes";

export const RadioWrapper = styled.label`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  gap: 8px;
  color: ${(props) => (props.bold ? colors.black : colors.darkGray)};
  font-size: ${(props) => (props.bold ? "16px" : "14px")};
  border: 2px solid rgba(204, 204, 204, 1);
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  transition: 0.3s;
  cursor: pointer;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const RadioLabel = styled.span`
  font-size: ${(props) => (props.bold ? "16px" : "13px")};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${colors.darkGray};
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
  :checked + ${RadioWrapper} {
    background-color: rgba(27, 217, 123, 0.1);
    border: 2px solid rgba(27, 217, 123, 1);
  }

  :checked + ${RadioWrapper} ${RadioLabel} {
    color: ${colors.black};
  }
`;
