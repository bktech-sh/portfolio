import {
  BackdropContactLeft,
  BackdropContactRight,
  ButtonTalk,
  ContactContent,
  ContactUsMobileContainer,
  Left,
} from "./styles";
import backdropTop from "@/app/assets/images/contact/backdrop-top.png";
import backdropBottom from "@/app/assets/images/contact/backdrop-bottom.png";
import Image from "next/image";
import { handleToWA } from "@/app/helpers/redirectWhatsapp";

const ContactUsMobile = () => {
  return (
    <ContactUsMobileContainer>
      <ContactContent>
        <Left>
          <h4>Start Your Journey With Us</h4>

          <ButtonTalk onClick={handleToWA}>Let's Talk</ButtonTalk>
        </Left>
        {/* <Right></Right> */}

        <BackdropContactLeft>
          <Image src={backdropTop} alt="backdrop-contact-top" width={150} />
        </BackdropContactLeft>

        <BackdropContactRight>
          <Image src={backdropBottom} alt="backdrop-contact-top" width={150} />
        </BackdropContactRight>
      </ContactContent>
    </ContactUsMobileContainer>
  );
};

export default ContactUsMobile;
