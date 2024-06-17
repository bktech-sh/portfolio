import Image from "next/image";
import {
  ButtonContactUs,
  ContactInfo,
  FooterContainer,
  PageLink,
  SocialMedia,
} from "./styles";
import bktechIcon from "@/app/assets/images/footer/bktech.png";
import instagramIcon from "@/app/assets/images/footer/instagram.png";
import twitterIcon from "@/app/assets/images/footer/twitter.png";
import facebookIcon from "@/app/assets/images/footer/facebook.png";

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

        <ButtonContactUs>Contact Us</ButtonContactUs>
      </ContactInfo>
      <PageLink></PageLink>
    </FooterContainer>
  );
};

export default Footer;
