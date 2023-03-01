import { FormControl, TextField } from "@mui/material";
import React from "react";

function AppTextInput({
  type,
  name,
  onChange,
  onBlur,
  value,
  placeholderText,
  className,
  label,
  error,
  errorText,
  ...rest
}) {
  return (
    <FormControl margin="normal" required fullWidth>
      <TextField
        size="small"
        name={name}
        type={type}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        error={errorText ? true : false}
        helperText={errorText}
        value={value}
        disabled={rest.disabled}
        {...rest}
      />
    </FormControl>
  );
}

export default AppTextInput;
