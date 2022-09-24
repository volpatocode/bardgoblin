import React, { useState } from "react";

import { Popover, Tooltip } from "@mui/material";
import { HelpIcon } from "./styles";

export default function index() {
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const open = (anchor);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Tooltip title="What is this?">
        <HelpIcon onClick={handleClick} fontSize="small" />
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            bgcolor: "#262626",
            color: "#f6f6f6",
            padding: "6px 8px",
            maxWidth: "300px",
            letterSpacing: "0.2px",
            lineHeight: "1.50",
          },
        }}
      >
        A UUID (Universal Unique Identifier) is a 128-bit value used to uniquely
        identify an object or entity on the internet. Depending on the specific
        mechanisms used, a UUID is either guaranteed to be different or is, at
        least, extremely likely to be different from any other UUID generated.
      </Popover>
    </>
  );
}
