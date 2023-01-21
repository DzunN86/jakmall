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
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onBlur, onChange, ref },
        fieldState: { error },
      }) => (
        <FormFloating>
          <FormInput
            type="text"
            placeholder={name}
            error={error}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
            {...props}
          />
          <FormLabel htmlFor={name} error={error}>
            {label}
          </FormLabel>
          {error && <FormError>{error.message || "Invalid"}</FormError>}
        </FormFloating>
      )}
    />
  );
}

export default Input;
