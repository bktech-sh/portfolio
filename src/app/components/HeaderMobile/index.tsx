import {
  CloseIcon,
  HeaderMobileContainer,
  Left,
  LineHumberger,
  Menu,
  MenuItem,
  MenuItemLink,
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
    console.log("999 AWKWAKWA");
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
          <Image src={mainLogo} alt="close" width={250} />
        </MenuItem>

        <MenuItem>
          <MenuItemLink onClick={() => handleMenuItemClick("principal")}>
            <p>Our Process</p>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink onClick={() => handleMenuItemClick("package")}>
            <p>Our Packages</p>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="#">
            <p>Case Studies</p>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink onClick={() => handleMenuItemClick("testimonial")}>
            <p>Testimonials</p>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink onClick={() => handleMenuItemClick("faq")}>
            <p>FAQ's</p>
          </MenuItemLink>
        </MenuItem>

        <MenuItem>
          <MenuItemLink href="#">
            <p></p>
          </MenuItemLink>
        </MenuItem>

        <MenuItem>
          <MenuItemLink href="#">
            <p>Career</p>
          </MenuItemLink>
        </MenuItem>

        <MenuItem>
          <MenuItemLink href="#">
            <p></p>
          </MenuItemLink>
        </MenuItem>

        <MenuItem>
          <MenuItemLink href="#">
            <p>Vision</p>
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
