import { handleToWA } from "@/app/helpers/redirectWhatsapp";
import { ButtonTalk } from "../Header/styles";
import { BigText, HeroContainerV2, SmallText, Wording } from "./styles";
import EllipseOpacityMobile from "../EllipseOpacityV2";
import BackdropHeroMobile from "../BackdropHeroMobile";

const HeroSectionMobileV2 = () => {
  return (
    <HeroContainerV2>
      <Wording>
        <BigText>
          <h1>Your Partner to</h1>
          <h1>Digitalize Business</h1>
        </BigText>

        <SmallText>
          <p>
            Welcome to BKTech, where innovation meets excellence in the world of
            software solutions. Join us on this transformative journey as we
            pave the way for a digitally empowered future. Together, we'll make
            the impossible possible.
          </p>
        </SmallText>
      </Wording>

      <ButtonTalk onClick={handleToWA}>Let's Talk</ButtonTalk>

      <EllipseOpacityMobile />
      <BackdropHeroMobile />
    </HeroContainerV2>
  );
};

export default HeroSectionMobileV2;
