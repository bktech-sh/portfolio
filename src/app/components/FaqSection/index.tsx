import FAQItem from "../FAQItem";
import { FAQSectionContainer, Left, Right } from "./styles";

const FAQSection = () => {
  return (
    <FAQSectionContainer>
      <Left>
        <FAQItem title="What services does BKTech Provide?" answer="asd" />
        <FAQItem
          title="Do BKTech offer cost estimates for projects? "
          answer="qwe"
        />
        <FAQItem title="How Experienced BKTech Team?" answer="iop" />
      </Left>
      <Right>
        <p>Kanan</p>
      </Right>
    </FAQSectionContainer>
  );
};

export default FAQSection;
