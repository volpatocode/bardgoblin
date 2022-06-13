import React, { useState } from "react";
import { LabelSelector, StyledFormControl, StyledInputLabel } from "./styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

export type LabelSelectorType = {};

export default function index({}: LabelSelectorType) {
  const [label, setLabel] = useState<string[]>([]);

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
    "#Underdark",
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
          input={<OutlinedInput sx={{color: "rgba(255, 255, 255, 0.75)"}} label="label"/>}
          renderValue={(selected) => selected.join("  ")}
          MenuProps={MenuProps}
        >
          {labels.map((name) => (
            <MenuItem  key={name} value={name}>
              <Checkbox sx={{ color: "rgba(255, 255, 255, 0.75)"}} checked={label.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </LabelSelector>
  );
}
