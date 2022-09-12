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
import { TopicContext } from "../../contexts/TopicContext";

type labelSelectorType = {
  type: "Section" | "Labels";
  section?: "Builds" | "Side Quests" | "Characters";
};

export default function index({ type, section }: labelSelectorType) {
  const { registerTopic } = useContext(TopicContext);
  const [label, setLabel] = useState([]);

  const handleChange = (event: SelectChangeEvent<typeof label>) => {
    const {
      target: { value },
    } = event;
    setLabel(typeof value === "string" ? value.split(",") : value);
  };

  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: "#141414",
        color: "rgba(255, 255, 255, 0.45)",
      },
    },
  };

  const sections = ["Side Quests", "Builds", "Characters"];

  const sideQuestsLabels = [
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

  const buildsLabels = ["#Test1", "#Test2"];

  const charactersLabels = ["Best1", "Best2"];

  const selector = {
    "Side Quests": sideQuestsLabels,
    Builds: buildsLabels,
    Characters: charactersLabels,
    Section: sections,
  };

  return (
    <LabelSelector>
      <StyledFormControl>
        <StyledInputLabel>
          {type == "Section" ? "Section" : "Labels"}
        </StyledInputLabel>
        <Select
          multiple={type == "Section" ? false : true}
          {...registerTopic(
            type == "Section" ? "topic.section" : ("topic.labels" as const)
          )}
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
          {selector[section || type]?.map((name) => (
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
