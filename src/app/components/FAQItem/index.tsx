import Image from "next/image";
import { Answer, FAQItemContainer, Question } from "./styles";
import plusIcon from "@/app/assets/images/faq/plus.png";
import { useState } from "react";

interface Props {
  title: string;
  answer: string;
}

const FAQItem = ({ answer, title }: Props) => {
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setIsShowAnswer((prev) => !prev);
  };

  return (
    <FAQItemContainer>
      <Question onClick={handleToggleAnswer}>
        <p>{title}</p>

        <Image src={plusIcon} alt="expand" width={25} />
      </Question>

      {isShowAnswer && (
        <Answer>
          <p>{answer}</p>
        </Answer>
      )}
    </FAQItemContainer>
  );
};

export default FAQItem;
