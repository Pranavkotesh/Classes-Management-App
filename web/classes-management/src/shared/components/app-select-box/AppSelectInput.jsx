import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Grid } from "@mui/material";

export default function BasicSelect({
  bgColor,
  width,
  height,
  icon,
  name,
  placeholder,
  label,
  value,
  onChange,
  menuItems,
}) {
  return (
    <FormControl
      fullWidth
      margin="normal"
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
      {icon && (
        <div style={{ position: "absolute", color: "#fff", left: 6, top: 5 }}>
          {icon}
        </div>
      )}
    </FormControl>
  );
}
