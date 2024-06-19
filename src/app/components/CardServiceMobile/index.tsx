import { Service } from "@/app/types";
import { CardServiceMobileContainer } from "./styles";
import Image from "next/image";
import { useState } from "react";
import { handleToWA } from "@/app/helpers/redirectWhatsapp";

interface Props {
  service: Service;
}

const CardServiceMobile = ({ service }: Props) => {
  const [showLetsTalk, setShowLetsTalk] = useState(false);

  const handleShowLetsTalk = () => {
    setShowLetsTalk(true);
  };

  const handleHideLetsTalk = () => {
    setShowLetsTalk(false);
  };

  return (
    <CardServiceMobileContainer
      onMouseEnter={handleShowLetsTalk}
      onMouseLeave={handleHideLetsTalk}
    >
      <Image src={service.imageService} alt={service.title} width={70} />

      <h4>{service.title}</h4>
      <p>{service.description}</p>

      {showLetsTalk && <a onClick={handleToWA}>Let's Talk</a>}
    </CardServiceMobileContainer>
  );
};

export default CardServiceMobile;
