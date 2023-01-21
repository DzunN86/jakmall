import styled from "styled-components";
import { colors } from "../../themes";

export const Paragraph = styled.p`
  color: ${(props) =>
    props.bold
      ? props.active
        ? colors.success
        : colors.black
      : colors.lightGray};
  font-size: 16px;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  margin: 0.3rem 0;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
`;
