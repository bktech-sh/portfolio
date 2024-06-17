import { ButtonTalk } from "../Header/styles";
import { BigText, HeroContainer, SmallText, Wording } from "./styles";

const HeroSection = () => {
  return (
    <HeroContainer>
      <Wording>
        <BigText>
          <h1>Your Partner to</h1>
          <h1>Digitalize Business</h1>
        </BigText>

        <SmallText>
          <p>
            Welcome to BKTech, where innovation meets excellence in the world of
            software solutions. Join us on this transformative
          </p>
          <p>
            journey as we pave the way for a digitally empowered future.
            Together, we'll make the impossible possible.
          </p>
        </SmallText>
      </Wording>

      <ButtonTalk>Let's Talk</ButtonTalk>
    </HeroContainer>
  );
};

export default HeroSection;
