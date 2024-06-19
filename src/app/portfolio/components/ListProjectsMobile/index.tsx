import { listProjects } from "@/app/constants/listProjects";
import { ListProjectContainer } from "./styles";
import CardProjectMobile from "@/app/components/CardProjectMobile";
import CardProjectDisabledMobile from "@/app/components/CardProjectDisabledMobile";

const ListProjectsMobile = () => {
  return (
    <ListProjectContainer>
      {listProjects.map((project) => (
        <CardProjectMobile project={project} />
      ))}
      <CardProjectDisabledMobile />
      <CardProjectDisabledMobile />
      <CardProjectDisabledMobile />
    </ListProjectContainer>
  );
};

export default ListProjectsMobile;
