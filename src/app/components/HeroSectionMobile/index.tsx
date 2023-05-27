import Image from "next/image";
import { HeroMobileContainer } from "./styles";
import heroImage from "../../assets/images/hero-image.png";
import OutlinedButton from "../OutlinedButton";

const HeroSectionMobile = () => {
  return (
    <HeroMobileContainer>
      <h3>
        Achieve elevation <br /> through delegation.
      </h3>
      <h6>We'll be the barrier between you and the chaos.</h6>
      <p>
        Running a business is tough. Executive assistants make things easier,
        give you more time and clarity, and, most importantly, allow you to
        perform as the business owner you once were.
      </p>

      <Image src={heroImage} width={250} alt="hero-image" />

      <OutlinedButton text="CONTACT US" size="large" />
    </HeroMobileContainer>
  );
};

export default HeroSectionMobile;
