import React from "react";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

function AppSelect({
  name,
  onChange,
  onBlur,
  value,
  placeholder,
  className,
  label,
  errorText,
  menuItems,
  ...rest
}) {
  return (
    <FormControl fullWidth margin="normal">
      {label && <Typography style={{ color: "grey" }}>{label}</Typography>}
      <Select
        value={value}
        name={name}
        size="small"
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        {...rest}
      >
        {menuItems.map((d) => (
          <MenuItem value={d.value} key={d.value}>
            {d.label}
          </MenuItem>
        ))}
      </Select>
      {errorText && (
        <FormHelperText className="custom-error-text">
          {errorText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default AppSelect;
