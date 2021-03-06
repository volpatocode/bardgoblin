import React, { useContext, useEffect, useState } from "react";

import {
  OutlinedInput,
  MenuItem,
  ListItemText,
  Select,
  SelectChangeEvent,
  Checkbox,
} from "@mui/material";

import { LabelSelector, StyledFormControl, StyledInputLabel } from "./styles";
import { UserContext } from "../../contexts/UserContext";

export default function index() {
  const { topics, setTopics } = useContext(UserContext);
  const [label, setLabel] = useState([]);

  const handleChange = (event: SelectChangeEvent<typeof label>) => {
    const {
      target: { value },
    } = event;
    setLabel(typeof value === "string" ? value.split(",") : value);
    setTopics((current) => {
      return { ...current, labels: [...label] };
    });
  };

  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: "#141414",
        color: "rgba(255, 255, 255, 0.45);",
      },
    },
  };

  const possibleLabels = [
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
              sx={{
                color: "rgba(255, 255, 255, 0.45)",
                border: "1px solid rgba(29, 29, 29, 0.7)",
                outline: "none",
                "&:hover": { border: "1px solid rgba(29, 29, 29, 0.7)" },
              }}
              label="label"
            />
          }
          renderValue={(selected) => selected.join("  ")}
          MenuProps={MenuProps}
        >
          {possibleLabels.map((name) => (
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
