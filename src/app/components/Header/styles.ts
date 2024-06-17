import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  background-color: ${WorkMateColors.white};
  color: ${WorkMateColors.black};
  height: 85px;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
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
    background-color: ${WorkMateColors.green};
    border-radius: 2px;
  }
`;

export const ButtonTalk = styled.button`
  background-color: ${WorkMateColors.blue};
  border: none;
  height: 52px;
  width: 112px;
  border-radius: 15px;
  color: white;
  font-size: 16px;
`;
