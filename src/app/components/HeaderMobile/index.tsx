import {
  CloseIcon,
  HeaderMobileContainer,
  Left,
  LineHumberger,
  Menu,
  MenuItem,
  MenuItemLink,
  MenuTitle,
  Right,
} from "./styles";
import mainLogo from "../../assets/images/main-logo.png";
import Image from "next/image";
import { useState } from "react";

import close from "../../assets/images/close.png";

interface HeaderMobileInterface {
  scrollToSection: (sectionId: string) => void;
}

const HeaderMobile = ({ scrollToSection }: HeaderMobileInterface) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = (sectionId: string) => {
    setMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <HeaderMobileContainer>
      <Left>
        <Image src={mainLogo} width={200} alt="main-logo" />
      </Left>
      <Right onClick={toggleMenu} isOpen={menuOpen}>
        {menuOpen ? (
          <Image src={close} alt="close" width={30} />
        ) : (
          <>
            <LineHumberger />
            <LineHumberger />
          </>
        )}
      </Right>

      <Menu open={menuOpen}>
        <MenuItem>
          <MenuTitle>
            <Image src={mainLogo} alt="close" width={250} />
          </MenuTitle>
        </MenuItem>

        <MenuItem>
          <MenuItemLink onClick={() => handleMenuItemClick("principal")}>
            <p>Services</p>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink onClick={() => handleMenuItemClick("package")}>
            <p>Projects</p>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="#">
            <p>Clients</p>
          </MenuItemLink>
        </MenuItem>

        <MenuItem>
          <CloseIcon>
            <Image src={close} alt="close" width={30} onClick={toggleMenu} />
          </CloseIcon>
        </MenuItem>
      </Menu>
    </HeaderMobileContainer>
  );
};

export default HeaderMobile;
