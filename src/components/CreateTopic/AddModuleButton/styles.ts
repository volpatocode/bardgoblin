import styled from "@emotion/styled";
import { Button } from "@mui/material";
import AddIcona from '@mui/icons-material/Add';

export const AddModuleButton = styled(Button)`
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    align-items: center;
    text-transform: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.45);
    :hover{
        background: transparent;
    }

`;

export const AddIcon = styled(AddIcona)`
    color: rgba(255, 255, 255, 0.45);
`;
