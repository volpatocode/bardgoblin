import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vw;
`;

export const ContentWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
`;
