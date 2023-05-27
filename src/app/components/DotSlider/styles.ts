import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

interface DotInterface {
  isActive: boolean;
}
export const DotContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Dot = styled.div<DotInterface>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.isActive ? WorkMateColors.darkGreen : WorkMateColors.green};
`;
