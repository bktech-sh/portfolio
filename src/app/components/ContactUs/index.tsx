import { ButtonTalk } from "../Header/styles";
import {
  BackdropContactLeft,
  BackdropContactRight,
  ContactContent,
  ContactUsContainer,
  Left,
  Right,
} from "./styles";
import backdropTop from "@/app/assets/images/contact/backdrop-top.png";
import backdropBottom from "@/app/assets/images/contact/backdrop-bottom.png";
import Image from "next/image";
import { handleToWA } from "@/app/helpers/redirectWhatsapp";

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <ContactContent>
        <Left>
          <h4>
            Start Your Journey <br /> With Us
          </h4>

          <ButtonTalk onClick={handleToWA}>Let's Talk</ButtonTalk>
        </Left>
        <Right></Right>

        <BackdropContactLeft>
          <Image src={backdropTop} alt="backdrop-contact-top" width={300} />
        </BackdropContactLeft>

        <BackdropContactRight>
          <Image src={backdropBottom} alt="backdrop-contact-top" width={300} />
        </BackdropContactRight>
      </ContactContent>
    </ContactUsContainer>
  );
};

export default ContactUs;
