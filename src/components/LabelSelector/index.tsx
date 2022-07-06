import React, { useState } from "react";

import {
  OutlinedInput,
  MenuItem,
  ListItemText,
  Select,
  SelectChangeEvent,
  Checkbox,
} from "@mui/material";

import { LabelSelector, StyledFormControl, StyledInputLabel } from "./styles";

export default function index() {
  const [label, setLabel] = useState([]);

  const handleChange = (event: SelectChangeEvent<typeof label>) => {
    const {
      target: { value },
    } = event;
    setLabel(typeof value === "string" ? value.split(",") : value);
  };

  const ITEM_HEIGHT = 30;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        backgroundColor: "#141414",
        color: "rgba(255, 255, 255, 0.75)",
      },
    },
  };

  const labels = [
    "#Cave",
    "#Forest",
    "#Mountain",
    "#Plains",
    "#Swamp",
    "#Dungeon",
    "#Aquatic",
    "#Desert",
    "#Jungle",
  ];

  return (
    <LabelSelector>
      <StyledFormControl>
        <StyledInputLabel id="labels">Labels</StyledInputLabel>
        <Select
          multiple
          value={label}
          onChange={handleChange}
          input={
            <OutlinedInput
              sx={{ color: "rgba(255, 255, 255, 0.75)" }}
              label="label"
            />
          }
          renderValue={(selected) => selected.join("  ")}
          MenuProps={MenuProps}
        >
          {labels.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox
                sx={{ color: "rgba(255, 255, 255, 0.75)" }}
                checked={label.indexOf(name) > -1}
              />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </LabelSelector>
  );
}
