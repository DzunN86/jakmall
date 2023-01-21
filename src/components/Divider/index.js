import styled from "styled-components";

export const Divider = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 1px;
  background-color: rgba(204, 204, 204, 1);
  margin: 20px 0;
`;
