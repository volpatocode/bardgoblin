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
  const { registerTopic, label, setLabel, topicSection, setTopicSection } =
    useContext(TopicContext);

  const handleSection = (event: SelectChangeEvent<typeof topicSection>) => {
    const {
      target: { value },
    } = event;
    setTopicSection(value);
  };

  const handleLabels = (event: SelectChangeEvent<typeof label>) => {
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
  };

  if (type == "Section") {
    return (
      <LabelSelector>
        <StyledFormControl>
          <StyledInputLabel>Section</StyledInputLabel>
          <Select
            multiple={false}
            {...registerTopic("topic.section" as const)}
            value={topicSection}
            onChange={handleSection}
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
            renderValue={(selected) => selected}
            MenuProps={MenuProps}
          >
            {sections?.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  sx={{ color: "rgba(255, 255, 255, 0.75)" }}
                  checked={topicSection.indexOf(name) > -1}
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      </LabelSelector>
    );
  }

  if (type == "Labels") {
    return (
      <LabelSelector>
        <StyledFormControl>
          <StyledInputLabel>Labels</StyledInputLabel>
          <Select
            multiple
            {...registerTopic("topic.labels" as const)}
            value={label}
            onChange={handleLabels}
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
            {selector[section]?.map((name) => (
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
}
