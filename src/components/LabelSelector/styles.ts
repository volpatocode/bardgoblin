import styled from "@emotion/styled";
import { Box, InputLabel, OutlinedInput, Checkbox } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export const LabelSelector = styled(Box)``;

export const StyledOutlinedInput = styled(OutlinedInput)`
  color: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(29, 29, 29, 0.7);
  outline: none;
  :hover {
    border: 1px solid rgba(29, 29, 29, 0.7);
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: 300px;
  display: flex;
  justify-content: center;
  min-height: none;
`;

export const StyledInputLabel = styled(InputLabel)`
  color: rgba(255, 255, 255, 0.45);
`;

export const StyledCheckbox = styled(Checkbox)`
  color: rgba(255, 255, 255, 0.75);
`;

export const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "#141414",
      color: "rgba(255, 255, 255, 0.45)",
    },
  },
};
