import { ButtonTalk, HeaderContainer, Logo, Menu } from "./styles";
import mainLogo from "../../assets/images/home/bktech-logo.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Image src={mainLogo} width={50} alt="main-logo" />
      </Logo>
      <Menu>
        <p>About Us</p>
        <p>Portfolio</p>
      </Menu>

      <ButtonTalk>Let's Talk</ButtonTalk>
    </HeaderContainer>
  );
};

export default Header;
