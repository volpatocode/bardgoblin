import React, { useContext } from "react";

import {
  MenuItem,
  ListItemText,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import {
  LabelSelector,
  StyledOutlinedInput,
  StyledCheckbox,
  StyledFormControl,
  StyledInputLabel,
  MenuProps,
} from "./styles";

import { TopicContext } from "../../contexts/TopicContext";

type labelSelectorType = {
  type: "Section" | "Labels";
  section?: "Builds" | "Side Quests" | "Characters";
};

export default function index({ type, section }: labelSelectorType) {
  const { registerTopic, label, setLabel, topicSection, setTopicSection } =
    useContext(TopicContext);

  const handleSection = (
    event: SelectChangeEvent<typeof topicSection>,
    prev
  ) => {
    const {
      target: { value },
    } = event;
    setTopicSection(value);
    value != prev && setLabel([]);
  };

  const handleLabels = (event: SelectChangeEvent<typeof label>) => {
    const {
      target: { value },
    } = event;
    setLabel(typeof value === "string" ? value.split(",") : value);
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
            {...registerTopic("section" as const)}
            value={topicSection}
            onChange={handleSection}
            input={<StyledOutlinedInput />}
            renderValue={(selected) => selected}
            MenuProps={MenuProps}
          >
            {sections?.map((name) => (
              <MenuItem key={name} value={name}>
                <StyledCheckbox checked={topicSection?.indexOf(name) > -1} />
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
            {...registerTopic("labels" as const)}
            value={label}
            onChange={handleLabels}
            input={<StyledOutlinedInput />}
            renderValue={(selected) => selected.join("  ")}
            MenuProps={MenuProps}
          >
            {selector[section]?.map((name) => (
              <MenuItem key={name} value={name}>
                <StyledCheckbox checked={label?.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      </LabelSelector>
    );
  }
}
