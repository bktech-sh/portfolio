import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const HeaderMobileV2Container = styled.div`
  display: flex;
  background-color: ${BktechColors.white};
  color: ${BktechColors.black};
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  h5 {
    :hover {
      cursor: pointer;
    }
  }
`;

export const SelectedMenu = styled.h5`
  display: inline-block;
  position: relative;
  padding-bottom: 10px;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${BktechColors.green};
    border-radius: 2px;
  }
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
