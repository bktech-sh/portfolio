import { listServices } from "@/app/constants/listServices";
import { OurServicesMobileContainer, ServiceList, Title } from "./styles";
import CardServiceMobile from "../CardServiceMobile";

const OurServicesMobile = () => {
  return (
    <OurServicesMobileContainer>
      <Title>
        <h4>What We Do</h4>
        <p>
          We provide Software Development Services and Products to Businesses
          Across Indonesia. We deliver premium services, affordable and executed
          by technology-experienced professionals.
        </p>
      </Title>

      <ServiceList>
        {listServices.map((service) => (
          <CardServiceMobile service={service} />
        ))}
      </ServiceList>
    </OurServicesMobileContainer>
  );
};

export default OurServicesMobile;
