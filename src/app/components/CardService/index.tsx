import { Service } from "@/app/types";
import { CardServiceContainer } from "./styles";
import Image from "next/image";

interface Props {
  service: Service;
}

const CardService = ({ service }: Props) => {
  return (
    <CardServiceContainer>
      <Image src={service.imageService} alt={service.title} width={70} />

      <h4>{service.title}</h4>
      <p>{service.description}</p>
    </CardServiceContainer>
  );
};

export default CardService;
