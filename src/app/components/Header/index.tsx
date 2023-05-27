import { HeaderContainer, Logo, Menu, SelectedMenu } from "./styles";
import mainLogo from "../../assets/images/main-logo.png";
import Image from "next/image";
import OutlinedButton from "../OutlinedButton";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Image src={mainLogo} width={250} alt="main-logo" />
      </Logo>
      <Menu>
        <SelectedMenu>HOME</SelectedMenu>
        <h5>SERVICES</h5>
        <h5>PROJECTS</h5>
        <h5>CLIENTS</h5>

        <OutlinedButton size="small" text="CONTACT US" />
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
