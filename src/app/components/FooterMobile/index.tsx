import Image from "next/image";
import { Contact, FooterMobileContainer, SocialMediaIcons } from "./styles";

import iconFooter from "../../assets/images/icon-footer.png";
import facebook from "../../assets/images/facebook-circle.png";
import instagram from "../../assets/images/instagram-circle.png";
import linkedin from "../../assets/images/linkedin-circle.png";

const FooterMobile = () => {
  return (
    <FooterMobileContainer>
      <Image src={iconFooter} alt="icon-footer" width={87} />

      <Contact>
        <h6>+61 279 085 182</h6>
        <h6>operations@virtualworkmate.com.au</h6>
        <h6>903/50 Clarence St, Sydney NSW 2000</h6>
      </Contact>

      <SocialMediaIcons>
        <Image src={facebook} alt="icon-facebook" width={45} />
        <Image src={instagram} alt="icon-instagram" width={45} />
        <Image src={linkedin} alt="icon-linkedin" width={45} />
      </SocialMediaIcons>
    </FooterMobileContainer>
  );
};

export default FooterMobile;
