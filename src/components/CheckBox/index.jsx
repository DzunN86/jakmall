import { Checkbox, CheckboxLabel, FormControl } from "./checkBox.style";

function CheckBox({ label }) {
  return (
    <>
      <FormControl>
        <Checkbox id="dropshipper" />
        <CheckboxLabel htmlFor="dropshipper">{label}</CheckboxLabel>
      </FormControl>
    </>
  );
}

export default CheckBox;
