import Image from "next/image";
import {
  Description,
  Divider,
  PrincipalContainer,
  StepContainer,
  StepItem,
  Title,
} from "./styles";
import step1Img from "../../assets/images/step-1.png";
import step2Img from "../../assets/images/step-2.png";
import step3Img from "../../assets/images/step-3.png";
import step4Img from "../../assets/images/step-4.png";

const PrincipalSection = () => {
  return (
    <PrincipalContainer>
      <Title>
        <h3>Our winning process that ensures result.</h3>
        <p>
          We believe that quality doesn't have to be compromised if you pay
          less. In fact, we have a thorough and meticulous <br />
          hiring process to ensure we acquire high-quality virtual assistants
          that match your needs.
        </p>
      </Title>

      <StepContainer>
        <StepItem>
          <Description>
            <h6>Step 1</h6>
            <h4>Strategy Call</h4>
            <p>
              Schedule a free consultation call to determine if you <br />
              need a virtual assistant and if we can assist you.
            </p>
          </Description>

          <Image src={step1Img} alt="step-1-image" width={400} />
        </StepItem>
        <Divider />
        <StepItem>
          <Image src={step2Img} alt="step-1-image" width={244} />

          <Description>
            <h6>Step 2</h6>
            <h4>Map Out Playbook</h4>
            <p>
              Our Systems team created a playbook with SOP's, metrics and key
              activities.
            </p>
          </Description>
        </StepItem>
        <Divider />
        <StepItem>
          <Description>
            <h6>Step 3</h6>
            <h4>Source the Right Candidate</h4>
            <p>
              Our top recruitment team finds the top three candidates for you to
              interview.
            </p>
          </Description>

          <Image src={step3Img} alt="step-1-image" width={350} />
        </StepItem>
        <Divider />
        <StepItem>
          <Image src={step4Img} alt="step-1-image" width={321} />

          <Description>
            <h6>Step 4</h6>
            <h4>Endorse</h4>
            <p>
              We assess the campaign for a month, make gradual improvements, and
              then endorse the VA to you for ongoing management.
            </p>
          </Description>
        </StepItem>
        <Divider />
      </StepContainer>
    </PrincipalContainer>
  );
};

export default PrincipalSection;
