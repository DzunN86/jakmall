import { useState } from "react";
import {
  Card,
  Flex,
  Stepper,
  StepperLabel,
  StepperNumber,
  StepperWrapper,
} from "./components";
import Delevery from "./pages/Delevery";
import Finish from "./pages/Finish";
import Payment from "./pages/Payment";
import { GlobalStyle } from "./themes";

function App() {
  const [step, setStep] = useState(2);
  return (
    <>
      <GlobalStyle />
      <Flex align="center" justify="center" width="100%">
        <StepperWrapper>
          <Stepper onClick={() => setStep(1)}>
            <StepperNumber active>1</StepperNumber>
            <StepperLabel>Delivery</StepperLabel>
          </Stepper>
          <Stepper onClick={() => setStep(2)}>
            <StepperNumber>2</StepperNumber>
            <StepperLabel>Payment</StepperLabel>
          </Stepper>
          <Stepper onClick={() => setStep(3)}>
            <StepperNumber>3</StepperNumber>
            <StepperLabel>Finish</StepperLabel>
          </Stepper>
        </StepperWrapper>
      </Flex>
      <Card>
        {step === 1 && <Delevery />}
        {step === 2 && <Payment />}
        {step === 3 && <Finish />}
      </Card>
    </>
  );
}

export default App;
