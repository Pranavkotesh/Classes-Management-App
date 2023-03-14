import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function AppCard({ title, padding, minHeight, children,boxShadow}) {
  return (
    <Card
      style={{
        padding: padding || 24,
        minHeight: minHeight || "auto",
        fontWeight:'bolder',
      }}
      sx={{borderRadius:2,boxShadow: boxShadow ||1}}
    >
      <CardContent style={{ padding: 0 }}>
        {title && <Typography variant="button">{title}</Typography>}
        {children}
      </CardContent>
    </Card>
  );
}

export default AppCard;
