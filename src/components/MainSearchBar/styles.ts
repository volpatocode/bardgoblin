import styled from "@emotion/styled";
import { Button, Select } from "@mui/material";

export const MainSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  padding: 15px 6px;
  border-left: 2px solid #e2e2e2;
  color: #000;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  background-color: #fff;
  width: fit-content;
  outline: none;
  height: 60px;
  font-weight: 500;
  width: 300px;
  transition: 200ms ease-in-out;
  ::placeholder {
    color: #4f4f4f;
  }
  @media (max-width: 960px) {
    width: 250px;
  }
  @media (max-width: 600px) {
    width: 220px;
  }
  @media (max-width: 480px) {
    width: 180px;
    height: 40px;
  }
  @media (max-width: 420px) {
    width: 110px;
  }
`;

export const InputButton = styled(Button)`
  border: none;
  padding: 15px 10px 15px 10px;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  background-color: #fff;
  border-radius: 0px 7.5px 7.5px 0px;
  display: flex;
  align-items: center;
  color: #4f4f4f;
  height: 60px;
  cursor: pointer;
  :hover {
    background-color: #fff;
  }
  transition: 200ms ease-in-out;
  @media (max-width: 480px) {
    height: 40px;
    padding: 15px 4px 15px 4px;
  }
`;

export const SelectButton = styled(Select)`
  border: none;
  padding: 15px 8px 15px 8px;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  background-color: #fff;
  border-radius: 7.5px 0px 0px 7.5px;
  display: flex;
  height: 60px;
  align-items: center;
  color: #4f4f4f;
  font-weight: 600;
  gap: 0.3rem;
  cursor: pointer;
  :hover {
    outline: none;
    border: none;
  }
  overflow-y: hidden;
  transition: 200ms ease-in-out;
  @media (max-width: 480px) {
    height: 40px;
  }
  @media (max-width: 420px) {
    padding: 15px 3px 15px 6px;
  }
`;

export const SectionButton = styled(Button)`
  border: none;
  padding: 15px 8px 15px 15px;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  background-color: #fff;
  border-radius: 7.5px 0px 0px 7.5px;
  display: flex;
  height: 60px;
  align-items: center;
  color: #4f4f4f;
  font-weight: 600;
  gap: 0.3rem;
  text-transform: none;
  cursor: pointer;
  :hover {
    outline: none;
    border: none;
    background-color: #fff;
  }
  transition: 200ms ease-in-out;
  @media (max-width: 480px) {
    height: 40px;
  }
`;
