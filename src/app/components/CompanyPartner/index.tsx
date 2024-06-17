import CardProject from "../CardProject";
import { CompanyPartnerContainer, ListCardProject, Title } from "./styles";

const CompanyPartner = () => {
  return (
    <CompanyPartnerContainer>
      <Title>
        <h4>
          Companies we <br /> Work with
        </h4>
        <p>
          At BKTech, we take pride in collaborating with a diverse array of
          visionary companies that <br />
          span various industries. let's revolutionize your industry with
          innovative software solutions.
        </p>
      </Title>

      <ListCardProject>
        <CardProject />
        <CardProject />
        <CardProject />
      </ListCardProject>
    </CompanyPartnerContainer>
  );
};

export default CompanyPartner;
