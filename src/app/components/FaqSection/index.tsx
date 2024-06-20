import FAQItem from "../FAQItem";
import { ButtonTalk } from "../Header/styles";
import { listFAQ } from "./listQuestion";
import {
  EmailInput,
  FAQSectionContainer,
  InputEmail,
  Left,
  Right,
} from "./styles";

const FAQSection = () => {
  const sendEmail = () => {
    const email = "bktech.id@gmail.com";
    const subject = "Kerjasama bktech.id";

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`,
      "_blank"
    );
  };

  return (
    <FAQSectionContainer>
      <Left>
        {listFAQ.map((faq) => (
          <FAQItem answer={faq.answer} title={faq.question} key={faq.answer} />
        ))}
      </Left>

      <Right>
        <h4>How we can help you?</h4>

        <EmailInput>
          <InputEmail placeholder="Enter Your Email" />
          <ButtonTalk onClick={sendEmail}>Let's Talk</ButtonTalk>
        </EmailInput>
      </Right>
    </FAQSectionContainer>
  );
};

export default FAQSection;
