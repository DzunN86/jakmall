import {
  Button,
  Divider,
  Flex,
  Heading1Mark,
  Heading2,
  Paragraph,
  RadioButton,
} from "../components";

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

export default Payment;
