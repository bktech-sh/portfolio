import { ButtonTalk, HeaderContainer, Logo, Menu } from "./styles";
import mainLogo from "../../assets/images/home/bktech-logo.jpg";
import Image from "next/image";
import { handleToWA } from "@/app/helpers/redirectWhatsapp";

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

      <ButtonTalk onClick={handleToWA}>Let's Talk</ButtonTalk>
    </HeaderContainer>
  );
};

export default Header;
