import React from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

function AppCard({
  title,
  padding,
  minHeight,
  children,
  boxShadow,
  color,
  px,
  actionChildren,
  key
}) {
  return (
    <Card
      style={{
        padding: padding || 24,
        minHeight: minHeight || "auto",
        fontWeight: "bolder",
        
      }}
      sx={{
        borderRadius: 2,
        boxShadow: boxShadow || 1,
        backgroundColor: color || 'background.card',
        px: px
      }} key={key}
    >
      <CardContent style={{ padding: 0 }}>
        {title && <Typography variant="button">{title}</Typography>}
        {children}
      </CardContent>
      <CardActions>{actionChildren}</CardActions>
    </Card>
  );
}

export default AppCard;
