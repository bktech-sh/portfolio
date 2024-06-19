import Image from "next/image";
import { BKtechExplainContainer } from "./styles";
import bktechIcon from "@/app/assets/images/about/bktech-icon-large.png";

const BKtechExplain = () => {
  return (
    <BKtechExplainContainer>
      <Image src={bktechIcon} alt="bktech-icon" width={200} />
      <p>
        BKTech, your innovative software house headquartered in Jakarta,
        Indonesia. We excel in software development, design solutions, IT
        consulting, and creative design services. Our dedicated team crafts
        cutting-edge solutions tailored to your needs, transforming ideas into
        reality. Whether it's coding, design, or strategic guidance, BKTech is
        your partner in driving technological evolution
      </p>
    </BKtechExplainContainer>
  );
};

export default BKtechExplain;
