import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
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
import { validationSchema } from "../utils";
import useFormPersist from "react-hook-form-persist";
import { StateContext } from "../state";

function Delevery() {
  const [withDropshipper, setWithDropshipper] = useState(false);
  const { page, setPage } = useContext(StateContext);

  const { control, handleSubmit, watch, setValue } = useForm();

  // Persist form data to localStorage
  useFormPersist("form-delevery", { watch, setValue, storage: localStorage });

  const onSubmit = (data) => {
    console.log(data);
    setPage(2);
  };
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
            <CheckBox
              label="Send as dropshipper"
              onChange={() => setWithDropshipper(!withDropshipper)}
            />
          </Flex>
          <Flex gap="20px">
            <Flex direction="column" gap="20px" width="60%">
              <Input
                control={control}
                label="Email"
                name="email"
                rules={validationSchema.email}
              />
              <Input
                control={control}
                label="Phone Number"
                name="phoneNumber"
                rules={validationSchema.phoneNumber}
              />
              <TextArea
                maxChar={120}
                control={control}
                label="Delivery Address"
                name="deliveryAddress"
                rules={validationSchema.deliveryAddress}
              />
            </Flex>
            {withDropshipper && (
              <Flex direction="column" gap="20px" width="40%">
                <Input
                  control={control}
                  label="Dropshipper name"
                  name="dropshipperName"
                  rules={validationSchema.dropshipperName}
                />
                <Input
                  control={control}
                  label="Dropshipper phone number"
                  name="dropshipperPhone"
                  rules={validationSchema.dropshipperPhone}
                />
              </Flex>
            )}
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
          </Flex>
          <Flex direction="column">
            <Flex justify="space-between" noWrap>
              <Paragraph>Cost of goods</Paragraph>
              <Paragraph bold>500,000</Paragraph>
            </Flex>
            {withDropshipper && (
              <Flex justify="space-between" noWrap>
                <Paragraph>Dropshipping Fee</Paragraph>
                <Paragraph bold>5,900</Paragraph>
              </Flex>
            )}
            <Flex
              justify="space-between"
              noWrap
              style={{ marginBottom: "2rem" }}
            >
              <Heading2>Total</Heading2>
              <Heading2>505,900</Heading2>
            </Flex>
            <Button onClick={handleSubmit(onSubmit)}>
              Continue to Payment
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Delevery;
