import React, { useState } from "react";
import Popover from "@mui/material/Popover";

import { DeleteButton, DeleteIcon } from "./styles";
import { Typography } from "../../About/styles";

export default function index() {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchor(null);
  };

  const open = Boolean(anchor);

  return (
    <>
      <DeleteButton
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <DeleteIcon fontSize="medium" />
      </DeleteButton>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        PaperProps={{
          sx: {
            bgcolor: "#262626",
            color: "#f6f6f6",
            padding: "6px 8px",
            letterSpacing: "0.2px",
            lineHeight: "1.50",
          },
        }}
        open={open}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        Delete account
      </Popover>
    </>
  );
}
