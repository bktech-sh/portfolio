import Image from "next/image";
import {
  Contact,
  FooterContainer,
  SocialMedia,
  SocialMediaIcons,
} from "./styles";

import iconFooter from "../../assets/images/icon-footer.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <h6>Follow us to stay updated.</h6>

        <SocialMediaIcons>
          <Image src={facebook} alt="icon-facebook" width={45} />
          <Image src={instagram} alt="icon-instagram" width={45} />
          <Image src={linkedin} alt="icon-linkedin" width={45} />
        </SocialMediaIcons>
      </SocialMedia>

      <Image src={iconFooter} alt="icon-footer" width={165} />

      <Contact>
        <h6>+61 279 085 182</h6>
        <h6>operations@virtualworkmate.com.au</h6>
        <h6>903/50 Clarence St, Sydney NSW 2000</h6>
      </Contact>
    </FooterContainer>
  );
};

export default Footer;
