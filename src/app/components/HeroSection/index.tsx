import Image from "next/image";
import OutlinedButton from "../OutlinedButton";
import { HeroContainer, Left, Right } from "./styles";
import heroImage from "../../assets/images/hero-image.png";

const HeroSection = () => {
  return (
    <HeroContainer>
      <Left>
        <h3>
          Empowering Innovation <br />
          through Software Solutions.
        </h3>
        <h6>We'll unlock innovation and thrive with our software solutions</h6>
        <p>
          Our software house is dedicated to driving digital transformation.
          From custom applications to scalable platforms, we bring your ideas to
          life, delivering tailored solutions that exceed expectations. Unlock
          your potential for success with us.
        </p>
        <OutlinedButton text="CONTACT US" size="small" />
      </Left>
      <Right>
        <Image src={heroImage} width={400} alt="hero-image" />
      </Right>
    </HeroContainer>
  );
};

export default HeroSection;
