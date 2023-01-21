import styled from "styled-components";
import { colors } from "../../themes";

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  padding: 40px;
  margin: 0 50px;

  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
  }
`;
