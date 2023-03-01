import { Button } from "@mui/material";
import React from "react";

function AppButton({ btnText, variant, type, onClick, className, ...rest }) {
  return (
    <Button
      type={type}
      onClick={onClick}
      fullWidth
      variant="contained"
      color="primary"
      className={className}
      {...rest}
    >
      {btnText}
    </Button>
  );
}

export default AppButton;
