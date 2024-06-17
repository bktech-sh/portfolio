import Image from "next/image";
import { FAQItemContainer } from "./styles";
import plusIcon from "@/app/assets/images/faq/plus.png";

interface Props {
  title: string;
  answer: string;
}

const FAQItem = ({ answer, title }: Props) => {
  return (
    <FAQItemContainer>
      <p>{title}</p>

      <Image src={plusIcon} alt="expand" width={25} />
    </FAQItemContainer>
  );
};

export default FAQItem;
