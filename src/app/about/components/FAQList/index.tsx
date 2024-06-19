import FAQItem from "@/app/components/FAQItem";
import { listFAQ } from "../../constants";

const FAQList = () => {
  return (
    <div>
      {listFAQ.map((faq) => (
        <FAQItem answer={faq.answer} title={faq.question} key={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
