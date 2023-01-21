import {
  Button,
  CheckBox,
  Flex,
  Heading1Mark,
  Heading2,
  Input,
  Paragraph,
  TextArea,
} from "../components";

function Delevery() {
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
          <Flex justify="space-between" className="mb-2">
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

export default Delevery;
