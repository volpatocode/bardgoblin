import styled from "@emotion/styled";
import { Select } from "@mui/material";

export const NavSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  padding: 10px 6px;
  border-left: 2px solid #e2e2e2;
  color: #000;
  font-size: 0.7rem;
  letter-spacing: 0.2px;
  height: 40px;
  background-color: #fff;
  width: fit-content;
  outline: none;
  transition: 200ms ease-in-out;
  width: 300px;
  font-weight: 500;
  ::placeholder {
    color: #4f4f4f;
  }
`;

export const InputButton = styled.button`
  border: none;
  padding: 10px 8px 10px 6px;
  font-size: 0.5rem;
  letter-spacing: 0.2px;
  background-color: #fff;
  height: 40px;
  border-radius: 0px 7.5px 7.5px 0px;
  display: flex;
  align-items: center;
  color: #4f4f4f;
  cursor: pointer;
`;

export const SelectButton = styled(Select)`
  border: none;
  padding: 15px 4px 15px 4px;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  background-color: #fff;
  border-radius: 7.5px 0px 0px 7.5px;
  display: flex;
  height: 40px;
  align-items: center;
  color: #4f4f4f;
  font-weight: 600;
  gap: 0.3rem;
  cursor: pointer;
  :hover {
    outline: none;
    border: none;
  }
`;
