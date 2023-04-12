import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";


export default function BasicSelect({
  bgColor,
  width,
  height,
  icon,
  name,
  placeholder,
  label,
  value,
  error,
  errorText,
  onChange,
  menuItems,
  marginTop,
  onBlur,
  marginY,
  color
}) {
  return (
    <FormControl
      fullWidth
      style={{ position: "relative" }}
      className="custom-select"
      sx={{my:marginY||"",marginTop:marginTop||""}}
    >
      <InputLabel className="input-select-label">{label}</InputLabel>
      <Select
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        size="small"
        error={error||errorText ? true : false}
        sx={{
          width: width || "auto",
          height: height || "auto",
          backgroundColor: bgColor || "background.grid",
          paddingLeft: icon ? "24px" : "",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{color:'#e60000',backgroundColor:'background.grid'}}>{errorText}</FormHelperText>
      {icon && (
        <div style={{ position: "absolute", color: color ||"#fff", left: 13, top: 5 }}>
          {icon}
        </div>
      )}
      {icon && (
        <div style={{ position: "absolute", color:"#e60000", right:13, top: 7 }}>
          {errorText?<ErrorIcon/>:""}
        </div>
      )}
    </FormControl>
  );
}
