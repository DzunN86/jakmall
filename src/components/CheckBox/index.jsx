import { Checkbox, CheckboxLabel, FormControl } from "./checkBox.style";

function CheckBox({ label, ...props }) {
  return (
    <>
      <FormControl>
        <Checkbox id="dropshipper" {...props} />
        <CheckboxLabel htmlFor="dropshipper">{label}</CheckboxLabel>
      </FormControl>
    </>
  );
}

export default CheckBox;
