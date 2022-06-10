import styled from "@emotion/styled";

export const UserWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background: url("/background.png") no-repeat center left / cover;
`;

export const UserContent = styled.div`
  width: 100vw;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12rem;
  gap: 1.3rem;
`;

export const UserPainel = styled.div`
  background-color: #f6f6f6;
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

export const InfoInputWrapper = styled.div`
`;

export const InfoInput = styled.input`
`;

export const UserPainelFooter = styled.div`
`;

