import { Service } from "@/app/types";
import { CardServiceMobileContainer } from "./styles";
import Image from "next/image";

interface Props {
  service: Service;
}

const CardServiceMobile = ({ service }: Props) => {
  const handleClick = () => {
    if (service.link) {
      window.open(service.link);
    }
  };

  return (
    <CardServiceMobileContainer>
      <Image src={service.imageService} alt={service.title} width={70} />

      <h4>{service.title}</h4>
      <p>{service.description}</p>

      <a onClick={handleClick}>Portfolio</a>
    </CardServiceMobileContainer>
  );
};

export default CardServiceMobile;
