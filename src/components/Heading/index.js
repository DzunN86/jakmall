import styled from "styled-components";
import { colors } from "../../themes";

export const Heading = styled.h1`
  color: ${colors.primary};
  font-weight: 700;
  position: relative;
  margin: 10px 0;
`;

export const Heading1Mark = styled(Heading)`
  font-size: 36px;
  z-index: 1;

  ::before {
    background-color: #eeeeee;
    content: "";
    position: absolute;
    bottom: 4px;
    height: 8px;
    margin-top: 10px;
    width: 311.52px;
    z-index: -1;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Heading2 = styled(Heading)`
  font-size: 24px;
`;
