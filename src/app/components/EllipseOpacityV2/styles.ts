import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const Ellipseku = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 40%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 50%;
  background-color: ${BktechColors.mediumBlue};
  box-shadow: 0px 0px 60px 60px ${BktechColors.mediumBlue};
`;
