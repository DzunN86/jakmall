import { useState } from "react";
import { Controller } from "react-hook-form";
import { Flex } from "../Flex";
import {
  FormCounter,
  FormError,
  FormFloating,
  FormInput,
  FormLabel,
} from "./input.style";

function TextArea({
  name,
  control,
  defaultValue,
  rules,
  placeholder,
  label,
  type,
  error,
  maxChar,
  ...props
}) {
  const [char, setChar] = useState(0);

  const handleChar = (e) => {
    setChar(e.target.value.length);
  };
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
            id="name"
            placeholder={name}
            error={error}
            value={value}
            onBlur={onBlur}
            onChange={(e) => {
              onChange(e);
              handleChar(e);
            }}
            inputRef={ref}
            maxLength={maxChar}
            {...props}
          />
          <FormLabel htmlFor="name" error={error}>
            {label}
          </FormLabel>
          <Flex justify={error ? "space-between" : "flex-end"}>
            {error && <FormError>{error.message || "Invalid"}</FormError>}
            <FormCounter>{char + "/" + maxChar || "∞"}</FormCounter>
          </Flex>
        </FormFloating>
      )}
    />
  );
}

export default TextArea;
