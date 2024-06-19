import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const VisionMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw 15vw;
  gap: 20px;

  h4 {
    font-size: 32px;
  }

  p {
    line-height: 24px;
    font-size: 12px;
    text-align: center;
    color: ${BktechColors.mediumGrey};
  }
`;
