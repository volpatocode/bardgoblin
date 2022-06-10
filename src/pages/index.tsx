import React, { useState, useEffect } from "react";
import { Button, useTheme } from "@mui/material";

type propsType = {};

export default function Home(): propsType {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <Button variant="contained" color="primary">
        aaaaaaa
      </Button>
    </>
  );
}
