import { listProjects } from "@/app/constants/listProjects";
import { ListProjectContainer } from "./styles";
import CardProject from "@/app/components/CardProject";
import CardProjectDisabled from "@/app/components/CardProjectDisabled";

const ListProjects = () => {
  return (
    <ListProjectContainer>
      {listProjects.map((project) => (
        <CardProject project={project} />
      ))}
      <CardProjectDisabled />
      <CardProjectDisabled />
      <CardProjectDisabled />
      <CardProjectDisabled />
      <CardProjectDisabled />
      <CardProjectDisabled />
    </ListProjectContainer>
  );
};

export default ListProjects;
