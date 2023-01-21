import styled from "styled-components";
import { colors } from "../../themes";
import { Paragraph } from "../Paragraph";

export const StepperWrapper = styled.div`
  display: flex;
  background-color: ${colors.background};
  align-items: center;
  justify-content: space-between;
  padding: 20px 38px;
  border-radius: 35px;
  gap: 40px;
  transform: translateY(50%);
`;

export const StepperNumber = styled.div`
  background-color: ${(props) =>
    props.active ? colors.primary : "rgba(255, 138, 0, 0.2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: ${(props) => (props.active ? colors.white : colors.primary)};
  font-size: 16px;
  font-weight: 600;
  height: 30px;
  line-height: 19px;
  width: 30px;
  transition: 0.3s;

  @media (max-width: 768px) {
    height: 25px;
    width: 25px;
  }
`;

export const Stepper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100px; */
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover ${StepperNumber} {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;

export const StepperLabel = styled(Paragraph)`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;
