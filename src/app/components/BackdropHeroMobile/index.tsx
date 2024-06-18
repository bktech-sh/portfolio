import Image from "next/image";
import { BackdropLeft, BackdropRight } from "./styles";
import backdropRight from "@/app/assets/images/home/backdrop-1.png";
import backdropLeft from "@/app/assets/images/home/backdrop-2.png";

const BackdropHeroMobile = () => {
  return (
    <div>
      <BackdropRight>
        <Image
          src={backdropRight}
          alt="backdrop-1"
          width={250}
          priority={true}
        />
      </BackdropRight>
      <BackdropLeft>
        <Image src={backdropLeft} alt="backdrop-2" width={150} />
      </BackdropLeft>
    </div>
  );
};

export default BackdropHeroMobile;
