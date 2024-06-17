import FAQItem from "../FAQItem";
import { ButtonTalk } from "../Header/styles";
import {
  EmailInput,
  FAQSectionContainer,
  InputEmail,
  Left,
  Right,
} from "./styles";

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
        <h4>How we can help you?</h4>

        <EmailInput>
          <InputEmail placeholder="Enter Your Email" />
          <ButtonTalk>Let's Talk</ButtonTalk>
        </EmailInput>
      </Right>
    </FAQSectionContainer>
  );
};

export default FAQSection;
