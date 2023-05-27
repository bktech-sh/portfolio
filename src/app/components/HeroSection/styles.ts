import { WorkMateColors } from "@/app/constants/colors";
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
  height: 90vh;
  padding: 0 50px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 491px;
  gap: 20px;

  h3 {
    font-size: 30px;
    line-height: 45px;
    color: ${WorkMateColors.darkGrey};
  }

  h6 {
    font-size: 12px;
    color: ${WorkMateColors.darkGreen};
  }

  p {
    line-height: 25px;
    font-size: 12px;
  }
`;

export const Right = styled.div`
  display: flex;
`;
