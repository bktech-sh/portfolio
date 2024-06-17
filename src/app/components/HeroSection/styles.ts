import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15vw;
  background: url("images/hero-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  padding: 0 50px;
`;

export const Wording = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BigText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  align-items: center;
  font-weight: 800;
`;

export const SmallText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-weight: 200;
`;
