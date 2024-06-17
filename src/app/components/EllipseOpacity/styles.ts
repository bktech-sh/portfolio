import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const Ellipseku = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 50%;
  background-color: ${WorkMateColors.mediumBlue};
  box-shadow: 0px 0px 60px 60px ${WorkMateColors.mediumBlue};
`;
