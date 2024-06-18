import { BktechColors } from "@/app/constants/colors";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const breatheAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ContactUsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactContent = styled.div`
  display: flex;
  width: 80%;
  border-radius: 56px;
  color: white;
  padding: 50px 100px;
  justify-content: space-between;
  background-color: ${BktechColors.darkPurple};
  position: relative;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  h4 {
    font-weight: 400;
    font-size: 32px;
  }
`;

export const Right = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  background-color: ${BktechColors.yellow};
  animation: ${breatheAnimation} 4s ease-in-out infinite;
`;

export const BackdropContactLeft = styled.div`
  position: absolute;
  top: 0;
  right: 25%;
`;

export const BackdropContactRight = styled.div`
  position: absolute;
  left: -5%;
  bottom: -30%;
`;
