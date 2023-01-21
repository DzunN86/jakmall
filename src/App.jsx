import { useContext, useState } from "react";
import {
  Card,
  Flex,
  Stepper,
  StepperLabel,
  StepperNumber,
  StepperWrapper,
} from "./components";
import { Steps } from "./constans";
import Delevery from "./pages/Delevery";
import Finish from "./pages/Finish";
import Payment from "./pages/Payment";
import { StateContext, StateProvider } from "./state";
import { GlobalStyle } from "./themes";

function Page() {
  const { page, setPage } = useContext(StateContext);
  return (
    <>
      <Flex align="center" justify="center" width="100%">
        <StepperWrapper>
          {Steps.map((step, index) => (
            <Stepper onClick={() => setPage(index + 1)} key={step.id}>
              <StepperNumber active={page === index + 1}>
                {step.id}
              </StepperNumber>
              <StepperLabel>{step.title}</StepperLabel>
            </Stepper>
          ))}
        </StepperWrapper>
      </Flex>
      <Card>
        {page === 1 && <Delevery />}
        {page === 2 && <Payment />}
        {page === 3 && <Finish />}
      </Card>
    </>
  );
}

function App() {
  const [step, setStep] = useState(1);
  return (
    <StateProvider>
      <GlobalStyle />
      <Page />
    </StateProvider>
  );
}

export default App;
