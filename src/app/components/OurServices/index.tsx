import { listServices } from "@/app/constants/listServices";
import CardService from "../CardService";
import { OurServicesContainer, ServiceList, Title } from "./styles";

const OurServices = () => {
  return (
    <OurServicesContainer>
      <Title>
        <h4>What We Do</h4>
        <p>
          We provide Software Development Services and Products to Businesses
          Across Indonesia. We deliver premium services, affordable and executed
          by technology-experienced professionals.
        </p>
      </Title>

      <ServiceList>
        <CardService service={listServices[0]} />
        <CardService service={listServices[1]} />
      </ServiceList>

      <ServiceList>
        <CardService service={listServices[2]} />
        <CardService service={listServices[3]} />
      </ServiceList>
    </OurServicesContainer>
  );
};

export default OurServices;
