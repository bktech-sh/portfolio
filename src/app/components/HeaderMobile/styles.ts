import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const HeaderMobileContainer = styled.div`
  display: flex;
  background-color: ${WorkMateColors.white};
  height: 53px;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  transition: transform 0.5s ease;
  transform: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "rotate(-180deg)" : "rotate(0deg)"};
`;

export const LineHumberger = styled.div`
  height: 2px;
  background-color: #73ddb7;
  margin: 2px 0;
  width: 30px;
`;

// --------------

export const Menu = styled.ul<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${WorkMateColors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  padding: 30px 50px;
`;

export const MenuItem = styled.li`
  margin-bottom: 20px;

  p {
    color: ${WorkMateColors.darkGrey};
    font-size: 22px;
  }
`;

export const MenuItemLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
`;
