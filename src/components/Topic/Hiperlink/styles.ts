import styled from "@emotion/styled";

export const HiperLink = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  text-decoration: underline solid #ff9900;

  transition: 200ms ease-in-out;
  :hover {
    text-decoration: none;
    color: #ff9900;

  }
`;
