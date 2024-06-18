import { ButtonTalk, HeaderMobileV2Container, Logo, Menu } from "./styles";
import mainLogo from "../../assets/images/home/bktech-logo.jpg";
import Image from "next/image";
import { handleToWA } from "@/app/helpers/redirectWhatsapp";

const HeaderMobileV2 = () => {
  return (
    <HeaderMobileV2Container>
      <Logo>
        <Image src={mainLogo} width={50} alt="main-logo" />
      </Logo>

      <ButtonTalk onClick={handleToWA}>Let's Talk</ButtonTalk>
    </HeaderMobileV2Container>
  );
};

export default HeaderMobileV2;
