import Image from "next/image";
import OutlinedButton from "../OutlinedButton";
import { HeroContainer, Left, Right } from "./styles";
import heroImage from "../../assets/images/hero-image.png";

const HeroSection = () => {
  return (
    <HeroContainer>
      <Left>
        <h3>
          Achieve elevation <br />
          through delegation.{" "}
        </h3>
        <h6>We'll be the barrier between you and the chaos.</h6>
        <p>
          Running a business is tough. Executive assistants <br /> make things
          easier, give you more time and <br />
          clarity, and, most importantly, allow you to <br /> perform as the
          business owner you once were.
        </p>
        <OutlinedButton text="JOIN NOW" size="small" />
      </Left>
      <Right>
        <Image src={heroImage} width={400} alt="hero-image" />
      </Right>
    </HeroContainer>
  );
};

export default HeroSection;
