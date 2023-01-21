import {
  Divider,
  Flex,
  Heading1Mark,
  Heading2,
  Paragraph,
} from "../components";

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

export default Finish;
