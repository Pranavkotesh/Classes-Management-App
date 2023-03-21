import { Button } from "@mui/material";
import React from "react";

function AppButton({
  btnText,
  variant,
  type,
  onClick,
  color,
  className,
  startIcon,
  ...rest
}) {
  return (
    <Button
      startIcon={startIcon}
      type={type}
      onClick={onClick}
      fullWidth
      variant={variant||"contained"}
      color={color||"primary"}
      className={className}
      {...rest}
    >
      {btnText}
    </Button>
  );
}

export default AppButton;
