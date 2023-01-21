import { Controller } from "react-hook-form";
import { FormError, FormFloating, FormInput, FormLabel } from "./input.style";

function Input({
  name,
  control,
  defaultValue,
  rules,
  placeholder,
  label,
  type,
  error,
  ...props
}) {
  return (
    // <Controller
    //   name={name}
    //   control={control}
    //   rules={rules}
    //   render={({
    //     field: { value, onChange, onBlur },
    //     fieldState: { error },
    //   }) => (
    <>
      <FormFloating>
        <FormInput
          type="text"
          id="name"
          placeholder={name}
          error={error}
          {...props}
        />
        <FormLabel htmlFor="name" error={error}>
          {name}
        </FormLabel>
        {error && <FormError>{error}</FormError>}
      </FormFloating>
    </>
    //   )}
    // />
  );
}

export default Input;
