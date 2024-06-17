import Image from "next/image";
import { CardProjectContainer, DescriptionProject } from "./styles";
import kingImage from "@/app/assets/images/projects/king.png";
import { Project } from "@/app/types";

interface Props {
  project: Project;
}

const CardProject = ({ project }: Props) => {
  return (
    <CardProjectContainer>
      <DescriptionProject>
        <Image src={project.imageProject} width={120} alt="project" />
        <p>{project.description}</p>
      </DescriptionProject>

      <a href={project.link} target="_blank">
        Visit Site &gt;
      </a>
    </CardProjectContainer>
  );
};

export default CardProject;
