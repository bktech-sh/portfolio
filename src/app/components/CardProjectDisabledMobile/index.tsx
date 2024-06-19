import Image from "next/image";
import {
  CardProjectDisabledContainer,
  NotAvailableText,
  Overlay,
} from "./styles";
import kingImage from "@/app/assets/images/projects/king.png";

const CardProjectDisabledMobile = () => {
  return (
    <CardProjectDisabledContainer>
      <Overlay>
        <Image src={kingImage} width={120} alt="project" />
        <p>
          Through a dynamic partnership with King Expert, We craft landing pages
          that captivate, engage, and drive results.
        </p>

        <a>Visit Site &gt;</a>
      </Overlay>
      <NotAvailableText>Not Available Yet</NotAvailableText>
    </CardProjectDisabledContainer>
  );
};

export default CardProjectDisabledMobile;
