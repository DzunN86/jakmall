import styled from "styled-components";
import { GlobalStyle, colors } from "./themes";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import { useState } from "react";
import CheckBox from "./components/CheckBox";
import RadioButton from "./components/RadioButton";

const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  padding: 40px;
  margin: 0 50px;

  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
  }
`;

const Heading = styled.h1`
  color: ${colors.primary};
  font-weight: 700;
  position: relative;
  margin: 10px 0;
`;

const Heading1Mark = styled(Heading)`
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

const Heading2 = styled(Heading)`
  font-size: 24px;
`;

const Paragraph = styled.p`
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

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap};
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.noWrap ? "row" : "column")};
    width: 100%;
  }
`;

const Button = styled.button`
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

const StepperWrapper = styled.div`
  display: flex;
  background-color: ${colors.background};
  align-items: center;
  justify-content: space-between;
  padding: 20px 38px;
  border-radius: 35px;
  gap: 40px;
  transform: translateY(50%);
`;

const StepperNumber = styled.div`
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

const Stepper = styled.button`
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

const StepperLabel = styled(Paragraph)`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Divider = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 1px;
  background-color: rgba(204, 204, 204, 1);
  margin: 20px 0;
`;

function Delery() {
  return (
    <>
      <Paragraph
        onClick={() => {
          console.log("clicked");
        }}
        className="mb-1"
      >
        Back to cart
      </Paragraph>
      <Flex gap="20px">
        <Flex direction="column" width="70%">
          <Flex justify="space-between" noWrap className="mb-2">
            <Heading1Mark>Delivery details</Heading1Mark>
            <CheckBox label="Send as dropshipper" />
          </Flex>
          <div className="form-wrapper">
            <Input name={"Name"} error="Jancok" />
            <Input name={"Dropshipper name"} />
            <Input name={"Phone Number"} />
            <Input name={"Dropshipper phone number"} />
            <TextArea maxChar={20} name={"Delivery Address"} />
          </div>
        </Flex>
        <Flex
          direction="column"
          width="30%"
          justify="space-between"
          className="summary"
        >
          <Flex direction="column">
            <Heading2>Summary</Heading2>
            <Paragraph>10 items purchased</Paragraph>
          </Flex>
          <Flex direction="column">
            <Flex justify="space-between" noWrap>
              <Paragraph>Cost of goods</Paragraph>
              <Paragraph bold>500,000</Paragraph>
            </Flex>
            <Flex justify="space-between" noWrap>
              <Paragraph>Dropshipping Fee</Paragraph>
              <Paragraph bold>5,900</Paragraph>
            </Flex>
            <Flex
              justify="space-between"
              noWrap
              style={{ marginBottom: "2rem" }}
            >
              <Heading2>Total</Heading2>
              <Heading2>505,900</Heading2>
            </Flex>
            <Button>Continue to Payment</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function Payment() {
  return (
    <>
      <Paragraph
        onClick={() => {
          console.log("clicked");
        }}
        className="mb-1"
      >
        Back to Delivery
      </Paragraph>
      <Flex gap="20px">
        <Flex direction="column" width="70%">
          <Flex direction="column" className="mb-4">
            <Heading1Mark className="mb-2">Shipment</Heading1Mark>
            <Flex gap="10px" width="70%">
              <RadioButton name="shipment" label1="GO-SEND" label2="15,000" />
              <RadioButton name="shipment" label1="GO-SEND" label2="15,000" />
              <RadioButton name="shipment" label1="GO-SEND" label2="15,000" />
            </Flex>
          </Flex>
          <Flex direction="column" className="mb-4">
            <Heading1Mark className="mb-2">Payment</Heading1Mark>
            <Flex gap="10px" width="70%">
              <RadioButton name="shipment" label1="GO-SEND" label2="15,000" />
              <RadioButton name="shipment" label1="GO-SEND" label2="15,000" />
              <RadioButton name="shipment" label1="GO-SEND" label2="15,000" />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          width="30%"
          justify="space-between"
          className="summary"
        >
          <Flex direction="column">
            <Heading2>Summary</Heading2>
            <Paragraph>10 items purchased</Paragraph>
            <Divider width="25%" />
            <Paragraph>Delivery estimation</Paragraph>
            <Paragraph bold active>
              today by GO-SEND
            </Paragraph>
          </Flex>
          <Flex direction="column">
            <Flex justify="space-between" noWrap>
              <Paragraph>Cost of goods</Paragraph>
              <Paragraph bold>500,000</Paragraph>
            </Flex>
            <Flex justify="space-between" noWrap>
              <Paragraph>Dropshipping Fee</Paragraph>
              <Paragraph bold>5,900</Paragraph>
            </Flex>
            <Flex justify="space-between" noWrap>
              <Paragraph>
                <strong>GO-SEND</strong> shipment
              </Paragraph>
              <Paragraph bold>15,000</Paragraph>
            </Flex>
            <Flex
              justify="space-between"
              noWrap
              style={{ marginBottom: "2rem" }}
            >
              <Heading2>Total</Heading2>
              <Heading2>505,900</Heading2>
            </Flex>
            <Button>Pay with e-Wallet</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
function Finish() {
  return (
    <>
      <Paragraph
        onClick={() => {
          console.log("clicked");
        }}
        className="mb-1"
      >
        Back to Delivery
      </Paragraph>
      <Flex gap="20px">
        <Flex width="70%" align="center" justify="center">
          <Flex direction="column">
            <Heading1Mark className="mb-2">Thank you</Heading1Mark>
            <Paragraph>
              Order ID : <strong>XXKYB</strong>
            </Paragraph>
            <Paragraph className="mb-4">
              Your order will be delivered today with GO-SEND
            </Paragraph>
            <Paragraph
              onClick={() => {
                console.log("clicked");
              }}
            >
              Back to Delivery
            </Paragraph>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          width="30%"
          justify="space-between"
          className="summary"
        >
          <Flex direction="column">
            <Heading2>Summary</Heading2>
            <Paragraph>10 items purchased</Paragraph>
            <Divider width="25%" />
            <Paragraph>Delivery estimation</Paragraph>
            <Paragraph bold active>
              today by GO-SEND
            </Paragraph>
            <Divider width="25%" />
            <Paragraph>Payment method</Paragraph>
            <Paragraph bold active>
              Bank Transfer
            </Paragraph>
          </Flex>
          <Flex direction="column">
            <Flex justify="space-between" noWrap>
              <Paragraph>Cost of goods</Paragraph>
              <Paragraph bold>500,000</Paragraph>
            </Flex>
            <Flex justify="space-between" noWrap>
              <Paragraph>Dropshipping Fee</Paragraph>
              <Paragraph bold>5,900</Paragraph>
            </Flex>
            <Flex justify="space-between" noWrap>
              <Paragraph>
                <strong>GO-SEND</strong> shipment
              </Paragraph>
              <Paragraph bold>15,000</Paragraph>
            </Flex>
            <Flex
              justify="space-between"
              noWrap
              style={{ marginBottom: "2rem" }}
            >
              <Heading2>Total</Heading2>
              <Heading2>505,900</Heading2>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

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
        {step === 1 && <Delery />}
        {step === 2 && <Payment />}
        {step === 3 && <Finish />}
      </Card>
    </>
  );
}

export default App;
