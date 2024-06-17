import Image from "next/image";
import { CardProjectContainer } from "./styles";
import kingImage from "@/app/assets/images/projects/king.png";

const CardProject = () => {
  return (
    <CardProjectContainer>
      <Image src={kingImage} width={120} alt="project" />
      <p>
        Through a dynamic partnership with King Expert, We craft landing pages
        that captivate, engage, and drive results.
      </p>

      <a>Visit Site &gt;</a>
    </CardProjectContainer>
  );
};

export default CardProject;
