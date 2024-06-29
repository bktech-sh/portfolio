import { listProjects } from "@/app/constants/listProjects";
import {
  CompanyPartnerMobileContainer,
  ListCardProject,
  Title,
} from "./styles";
import CardProjectMobile from "../CardProjectMobile";

const CompanyPartnerMobile = () => {
  return (
    <CompanyPartnerMobileContainer>
      <Title>
        <h4>
         Our Engineers <br /> Work 
        </h4>
        <p>
          At BKTech, we take pride in collaborating with a diverse array of
          visionary companies that <br />
          span various industries. let's revolutionize your industry with
          innovative software solutions.
        </p>
      </Title>

      <ListCardProject>
        {listProjects.map((project) => (
          <CardProjectMobile project={project} key={project.title} />
        ))}
      </ListCardProject>
    </CompanyPartnerMobileContainer>
  );
};

export default CompanyPartnerMobile;
