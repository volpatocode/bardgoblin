import styled from "@emotion/styled";

export const TopicSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  padding: 1rem 0.2rem 1rem 1rem;
  color: #4f4f4f;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  background-color: #141414;
  width: fit-content;
  outline: none;
  height: 40px;
  transition: 200ms ease-in-out;
  font-weight: 500;
  ::placeholder {
    color: #4f4f4f;
  }
  border-radius: 7.5px 0 0 7.5px;
`;

export const InputButton = styled.button`
  border: none;
  padding: 15px 10px 15px 10px;
  font-size: 0.85rem;
  letter-spacing: 0.2px;
  background-color: #141414;
  border-radius: 0px 7.5px 7.5px 0px;
  display: flex;
  align-items: center;
  color: #4f4f4f;
  height: 40px;
  cursor: pointer;
`;
