import Image from "next/image";
import { HeroMobileContainer } from "./styles";
import heroImage from "../../assets/images/hero-image.png";
import OutlinedButton from "../OutlinedButton";

const HeroSectionMobile = () => {
  return (
    <HeroMobileContainer>
      <h3>Empowering Innovation through Software Solutions.</h3>
      <h6>We'll unlock innovation and thrive with our software solutions</h6>
      <p>
        Our software house is dedicated to driving digital transformation. From
        custom applications to scalable platforms, we bring your ideas to life,
        delivering tailored solutions that exceed expectations. Unlock your
        potential for success with us.
      </p>
      <Image src={heroImage} width={250} alt="hero-image" />

      <OutlinedButton text="CONTACT US" size="large" />
    </HeroMobileContainer>
  );
};

export default HeroSectionMobile;
