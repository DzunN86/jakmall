import styled from "styled-components";
import { colors } from "../../themes";

export const Button = styled.button`
  background-color: ${colors.primary};
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 20px 40px;
  width: 100%;
  transition: 0.3s;

  :hover {
    opacity: 0.8;
  }
`;
