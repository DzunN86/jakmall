import { useState } from "react";
import { Controller } from "react-hook-form";
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
          onChange={handleChar}
          maxLength={maxChar}
          {...props}
        />
        <FormLabel htmlFor="name" error={error}>
          {name}
        </FormLabel>
        <FormCounter>{char + "/" + maxChar || "∞"}</FormCounter>
        {error && <FormError>{error}</FormError>}
      </FormFloating>
    </>
    //   )}
    // />
  );
}

export default TextArea;
