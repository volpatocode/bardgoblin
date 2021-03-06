import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeMainContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background: url("/backgroundfull.png") no-repeat center center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
  padding-bottom: 10rem;
`;

export const WrittenContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: 100%;
`;

export const HomeTitle = styled.h1`
  font-size: 2.8rem;
  color: #fff;
  font-family: "New Rocker", cursive;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  text-align: center;
  max-width: 80%;
  transition: 0.2s ease-in-out;
  @media (max-width: 960px) {
    font-size: 2.3rem;
  }
  @media (max-width: 760px) {
    font-size: 2.1rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
    max-width: 90%;
  }
  @media (max-width: 420px) {
    font-size: 1.5rem;
  }
`;

export const HomeSubtitle = styled.h2`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.2px;
  text-align: center;
  font-weight: 400;
  max-width: 80%;
  @media (max-width: 960px) {
    font-size: 1.1rem;
  }
  @media (max-width: 760px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 90%;
  }
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`;
