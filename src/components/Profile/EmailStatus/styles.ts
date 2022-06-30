import styled from "@emotion/styled";
import { Box } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import PendingIcona from '@mui/icons-material/Pending';

export const EmailStatus = styled(Box)`
`;

export const Verified = styled(Box)`
  color: #ff9900;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const VerifiedIcon = styled(VerifiedUserIcon)`

`;

export const NotVerified = styled(Box)`
  color: #dd3e0e;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const NotVerifiedIcon = styled(GppMaybeIcon)`
    
`;

