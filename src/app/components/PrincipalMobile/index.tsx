import Image from "next/image";
import {
  PrincipalMobileContainer,
  StepContainer,
  StepItem,
  Title,
} from "./styles";
import step1Img from "../../assets/images/step-1.png";
import DotSlider from "../DotSlider";
import { useEffect, useState } from "react";

interface PrincipalMobileInterface {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const PrincipalMobile = ({ sectionRef }: PrincipalMobileInterface) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const dataPrincipal = [
    {
      step: "Step 1",
      title: "Strategy Call",
      description:
        "Schedule a free consultation call to determine if you need a virtual assistant and if we can assist you.",
    },

    {
      step: "Step 2",
      title: "Map Out Playbook",
      description:
        "Our Systems team created a playbook with SOP's, metrics and key activities. ",
    },
    {
      step: "Step 3",
      title: "Source the Right Candidate",
      description:
        "Our top recruitment team finds the top three candidates for you to interview. ",
    },
    {
      step: "Step 4",
      title: "Endorse",
      description:
        "We assess the campaign for a month, make gradual improvements, and then endorse the VA to you for ongoing management. ",
    },
  ];
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (diffX > 50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1); // Swipe to the left
    } else if (diffX < -50 && activeIndex < dataPrincipal.length - 1) {
      setActiveIndex(activeIndex + 1); // Swipe to the right
    } else if (diffX < -50 && activeIndex === dataPrincipal.length - 1) {
      setActiveIndex(0); // Wrap around to the first index
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % dataPrincipal.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [dataPrincipal]);

  return (
    <PrincipalMobileContainer ref={sectionRef} id="principal">
      <Title>
        <h3>Our winning process that ensures result.</h3>
        <p>
          We believe that quality doesn't have to be compromised if you pay
          less. In fact, we have a thorough and meticulous <br />
          hiring process to ensure we acquire high-quality virtual assistants
          that match your needs.
        </p>
      </Title>

      <StepContainer
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {dataPrincipal.map((item, index) => (
          <StepItem
            key={index}
            active={index === activeIndex}
            next={index === (activeIndex + 1) % dataPrincipal.length}
          >
            <h6>{item.title}</h6>
            <h4>{item.title}</h4>
            <Image src={step1Img} alt={`step-${item.step}`} width={210} />
            <p>{item.description}</p>
            <DotSlider activeIndex={activeIndex} />
          </StepItem>
        ))}
      </StepContainer>
    </PrincipalMobileContainer>
  );
};

export default PrincipalMobile;
