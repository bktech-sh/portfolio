import Image from "next/image";
import { BackdropLeft, BackdropRight } from "./styles";
import backdropRight from "@/app/assets/images/home/backdrop-1.png";
import backdropLeft from "@/app/assets/images/home/backdrop-2.png";

const BackdropHero = () => {
  return (
    <div>
      <BackdropRight>
        <Image
          src={backdropRight}
          alt="backdrop-1"
          width={400}
          priority={true}
        />
      </BackdropRight>
      <BackdropLeft>
        <Image src={backdropLeft} alt="backdrop-2" width={200} />
      </BackdropLeft>
    </div>
  );
};

export default BackdropHero;
