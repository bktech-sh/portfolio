import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const VisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5vw 15vw;
  gap: 20px;

  h4 {
    font-size: 64px;
  }

  p {
    line-height: 32px;
    font-size: 16px;
    color: ${BktechColors.mediumGrey};
  }
`;
