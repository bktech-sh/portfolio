import { ButtonTalk, HeaderContainer, Logo, Menu } from "./styles";
import mainLogo from "../../assets/images/home/bktech-logo.jpg";
import Image from "next/image";
import { handleToWA } from "@/app/helpers/redirectWhatsapp";
import { useRouter } from "next/navigation";

interface Props {
  activeTab: "about" | "portofolio" | "home";
}

const Header = ({ activeTab }: Props) => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Logo onClick={() => router.push("/")}>
        <Image src={mainLogo} width={50} alt="main-logo" />
      </Logo>
      <Menu>
        <p onClick={() => router.push("/about")}>About Us</p>
        <p>Portfolio</p>
      </Menu>

      <ButtonTalk onClick={handleToWA}>Let's Talk</ButtonTalk>
    </HeaderContainer>
  );
};

export default Header;
