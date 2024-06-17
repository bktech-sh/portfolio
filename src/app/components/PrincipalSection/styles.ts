import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 10vw;
  gap: 20px;
  padding-bottom: 100px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;

  h3 {
    color: ${BktechColors.darkGrey};
    font-size: 36px;
    line-height: 45px;
  }

  p {
    line-height: 25px;
    font-size: 12px;
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const StepItem = styled.div`
  display: flex;
  gap: 10vw;
  margin-top: 40px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h6 {
    color: ${BktechColors.mediumGrey};
    font-weight: bold;
    font-size: 12px;
  }

  h4 {
    color: ${BktechColors.darkGrey};
    font-size: 24px;
  }

  p {
    color: ${BktechColors.darkGrey};
    font-size: 12px;
    line-height: 25px;
    max-width: 300px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${BktechColors.lightGrey};
  width: 90%;
  border-radius: 10px;
`;
