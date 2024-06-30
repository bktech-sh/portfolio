import { Service } from "@/app/types";
import { CardServiceContainer } from "./styles";
import Image from "next/image";
import { useState } from "react";

interface Props {
  service: Service;
}

const CardService = ({ service }: Props) => {
  const [showLetsTalk, setShowLetsTalk] = useState(false);

  const handleShowLetsTalk = () => {
    setShowLetsTalk(true);
  };

  const handleHideLetsTalk = () => {
    setShowLetsTalk(false);
  };

  const handleClick = () => {
    if (service.link) {
      window.open(service.link, "_blank");
    }
  };

  return (
    <CardServiceContainer
      onMouseEnter={handleShowLetsTalk}
      onMouseLeave={handleHideLetsTalk}
    >
      <Image src={service.imageService} alt={service.title} width={70} />

      <h4>{service.title}</h4>
      <p>{service.description}</p>

      {showLetsTalk && <a onClick={handleClick}>Portfolio</a>}
    </CardServiceContainer>
  );
};

export default CardService;
