import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

interface StepItemProps {
  active: boolean;
  next: boolean;
}

export const PrincipalMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 10px;

  h3 {
    font-size: 22px;
    color: ${WorkMateColors.darkGrey};
  }

  p {
    font-size: 12px;
    color: ${WorkMateColors.darkGrey};
    line-height: 20px;
    max-width: 300px;
  }
`;

export const StepContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* margin-top: 50px; */
  width: 300px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px 30px;

  display: flex;
  flex-direction: row;
  margin-top: 50px;
  overflow-x: hidden;
`;

export const StepItem = styled.div<StepItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;

  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.active
      ? "translateX(0)"
      : props.next
      ? "translateX(100%)"
      : "translateX(-100%)"};
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};

  &:not(:first-of-type) {
    margin-left: -100%;
  }

  h6 {
    font-size: 12px;
    color: ${WorkMateColors.mediumGrey};
  }

  h4 {
    font-size: 18px;
    color: ${WorkMateColors.darkGrey};
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;
