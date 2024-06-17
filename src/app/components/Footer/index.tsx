import Image from "next/image";
import {
  BackdropFooter1,
  BackdropFooter2,
  BackdropFooter3,
  ButtonContactUs,
  Col1,
  Col2,
  ContactInfo,
  FooterContainer,
  PageLink,
  SocialMedia,
} from "./styles";
import bktechIcon from "@/app/assets/images/footer/bktech.png";
import instagramIcon from "@/app/assets/images/footer/instagram.png";
import twitterIcon from "@/app/assets/images/footer/twitter.png";
import facebookIcon from "@/app/assets/images/footer/facebook.png";
import backdropBottom from "@/app/assets/images/contact/backdrop-bottom.png";
import backdropTop from "@/app/assets/images/contact/backdrop-top.png";
import { handleToWA } from "@/app/helpers/redirectWhatsapp";

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <Image src={bktechIcon} alt="bktech-icon" width={50} />
        <p>Jakarta, Indonesia</p>

        <SocialMedia>
          <Image src={instagramIcon} alt="instagram" width={30} />
          <Image src={twitterIcon} alt="twitter" width={30} />
          <Image src={facebookIcon} alt="facebook" width={30} />
        </SocialMedia>

        <ButtonContactUs onClick={handleToWA}>Contact Us</ButtonContactUs>
      </ContactInfo>

      <PageLink>
        <Col1>
          <p>Work With Us</p>
          <p>About Us</p>
          <p>Our Work</p>
        </Col1>
        <Col2>
          <p>FAQs</p>
          <p>Report a Bug</p>
        </Col2>
      </PageLink>

      <BackdropFooter1>
        <Image src={backdropBottom} alt="backdrop-1" width={300} />
      </BackdropFooter1>
      <BackdropFooter2>
        <Image src={backdropBottom} alt="backdrop-2" width={200} />
      </BackdropFooter2>
      <BackdropFooter3>
        <Image src={backdropBottom} alt="backdrop-3" width={400} />
      </BackdropFooter3>
    </FooterContainer>
  );
};

export default Footer;
