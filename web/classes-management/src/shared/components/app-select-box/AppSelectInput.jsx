import * as React from "react";
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";
// import { IconButton } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";
// import { Grid } from "@mui/material";

export default function BasicSelect({
  bgColor,
  width,
  height,
  icon,
  iconEnd,
  name,
  placeholder,
  label,
  value,
  error,
  helperText,
  onChange,
  menuItems,
  color
}) {
  return (
    <FormControl
      fullWidth
      style={{ position: "relative" }}
      className="custom-select"
    >
      <InputLabel className="input-select-label">{label}</InputLabel>
      <Select
        name={name}
        placeholder={placeholder}
        // label={label}
        value={value}
        onChange={onChange}
        size="small"
        error={error}
        sx={{
          width: width || "auto",
          height: height || "auto",
          // color: "white",
          // fontSize: 14,
          backgroundColor: bgColor || "",
          paddingLeft: icon ? "24px" : "",
          // border: bgColor ? `1px solid ${bgColor}` : "",
          // // marginRight: { marginR },
          // marginLeft: -1,
          // textAlign: "center",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{color:'#cc0000'}}>{helperText}</FormHelperText>
      {icon && (
        <div style={{ position: "absolute", color: color ||"#fff", left: 6, top: 5 }}>
          {icon}
        </div>
      )}
      {icon && (
        <div style={{ position: "absolute", color:"#e60000", right:10, top: 5 }}>
          {iconEnd}
        </div>
      )}
    </FormControl>
  );
}
