import { BktechColors } from "@/app/constants/colors";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const CardProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  max-width: 250px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 4px 4px 40px 0px rgba(0, 0, 0, 0.1);
  box-shadow: -4px -4px 40px 0px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  p {
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 16px;
    margin-bottom: 32px;
  }

  a {
    color: ${BktechColors.blue};
    text-decoration: underline;
  }

  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.2),
      -8px -8px 20px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const DescriptionProject = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;
