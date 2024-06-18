import Image from "next/image";
import { CardProjectMobileContainer, DescriptionProject } from "./styles";
import { Project } from "@/app/types";

interface Props {
  project: Project;
}

const CardProjectMobile = ({ project }: Props) => {
  return (
    <CardProjectMobileContainer>
      <DescriptionProject>
        <Image src={project.imageProject} width={120} alt="project" />
        <p>{project.description}</p>
      </DescriptionProject>

      <a href={project.link} target="_blank">
        Visit Site &gt;
      </a>
    </CardProjectMobileContainer>
  );
};

export default CardProjectMobile;
