import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const HeroMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;
  text-align: center;
  background-color: ${BktechColors.white};
  background: url("images/hero-background-mobile.png");
  background-size: cover;
  background-repeat: no-repeat;

  gap: 15px;

  h3 {
    font-size: 20px;
    color: ${BktechColors.darkGrey};
  }

  h6 {
    color: ${BktechColors.darkGreen};
  }

  p {
    font-size: 12px;
    line-height: 25px;
    margin-bottom: 30px;
  }

  img {
    margin-bottom: 20px;
  }
`;
