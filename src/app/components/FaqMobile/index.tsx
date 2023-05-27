import Image from "next/image";
import { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionSection,
  FaqMobileContainer,
  Title,
} from "./styles";

import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";

interface FaqMobileInterface {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const FaqMobile = ({ sectionRef }: FaqMobileInterface) => {
  const [accordionItems, setAccordionItems] = useState([
    {
      question: "How do I join a virtual workspace?",
      answer:
        "To join a virtual workspace, follow the instructions provided by the workspace administrator or use the invitation link provided. Once you have access, log in to the virtual workspace platform and start collaborating with others!",
      isOpen: false,
    },
    {
      question:
        "Can I customize the appearance and layout of my virtual workspace?",
      answer:
        "Yes, most virtual workspace platforms allow you to customize the appearance and layout. You can usually personalize the theme, color scheme, and branding to align with your preferences or organization's guidelines.",
      isOpen: false,
    },
    {
      question: "How can I collaborate with others in a virtual workspace?",
      answer:
        "Collaboration in a virtual workspace typically involves real-time communication through chat, video calls, and audio conferences. You can also utilize shared document editing, file sharing, task management, and project boards to collaborate effectively.",
      isOpen: false,
    },
    {
      question:
        "Is it possible to integrate other apps or services into my virtual workspace?",
      answer:
        "Yes, many virtual workspace platforms offer integrations with popular productivity apps and services. This allows you to connect your workspace with other tools such as project management software, document storage platforms, calendars, and more.",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (index: number) => {
    setAccordionItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].isOpen = !updatedItems[index].isOpen;
      return updatedItems;
    });
  };

  return (
    <FaqMobileContainer ref={sectionRef} id="faq">
      <Title>
        <h6>FAQ's</h6>
        <p>Have questions? We're here to help.</p>
      </Title>

      <AccordionSection>
        {accordionItems.map((item, index) => (
          <AccordionContainer key={index}>
            <AccordionItem>
              <AccordionHeader
                isOpen={item.isOpen}
                onClick={() => toggleAccordion(index)}
              >
                <h6>{item.question}</h6>
                <Image
                  src={item.isOpen ? minus : plus}
                  alt="toggle"
                  width={24}
                />
              </AccordionHeader>
              <AccordionContent isOpen={item.isOpen}>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </AccordionContainer>
        ))}
      </AccordionSection>
    </FaqMobileContainer>
  );
};

export default FaqMobile;
