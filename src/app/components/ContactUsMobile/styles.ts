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

export const ContactUsMobileContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactContent = styled.div`
  display: flex;
  width: 80%;
  border-radius: 32px;
  color: white;
  padding: 50px;
  justify-content: space-between;
  background-color: ${BktechColors.darkPurple};
  position: relative;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  h4 {
    font-weight: 400;
    font-size: 24px;
  }
`;

export const Right = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: ${BktechColors.yellow};
  animation: ${breatheAnimation} 4s ease-in-out infinite;
`;

export const BackdropContactLeft = styled.div`
  position: absolute;
  top: 0;
  right: 10%;
`;

export const BackdropContactRight = styled.div`
  position: absolute;
  left: -5%;
  bottom: -30%;
`;

export const ButtonTalk = styled.button`
  background-color: #2652ee;
  border: none;
  height: 52px;
  width: 112px;
  border-radius: 15px;
  color: white;
  z-index: 2;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e45c0;
    color: #ffffff;
  }
`;
