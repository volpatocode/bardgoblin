import styled from "@emotion/styled";

export const Footer = styled.div`
background: #1D1D1D;
color: #8E8E8E;
letter-spacing: 0.2px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
text-align: center;
gap: 0.5rem;
width: 100%;
padding: 0.7rem 2.5rem 0.7rem 2.5rem;
@media (max-width: 960px) {
  padding: 0.7rem 1.5rem 0.7rem 1.5rem;
}
@media (max-width: 600px) {
  justify-content: center;
}

@media (max-width: 400px) {
  padding: 0.7rem 0.5rem 0.7rem 0.5rem;
}
`;
