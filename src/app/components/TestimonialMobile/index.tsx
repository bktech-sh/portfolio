import {
  Name,
  TestiContainer,
  TestiItem,
  TestiMobileContainer,
  Title,
} from "./styles";
import profileIcon from "../../assets/images/profile.png";
import Image from "next/image";

interface TestimonialMobileInterface {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const TestimonialMobile = ({ sectionRef }: TestimonialMobileInterface) => {
  return (
    <TestiMobileContainer ref={sectionRef} id="testimonial">
      <Title>
        <h3>Testimonials</h3>
        <p>
          Don't take our word for it. See what our clients have to say about us.
        </p>
      </Title>

      <TestiContainer>
        <TestiItem>
          <Image src={profileIcon} alt="profile" width={68} />

          <p>
            Pre-Virtual Workmate, I was overwhelmed with calling, setting
            appointments, meeting sellers, and reaching out. I burned out before
            I realised. Ray then introduced Virtual Workmate to me. Because I
            needed help, I signed up. I just get the leads they guarantee and
            meet the sellers. It's like magic!
          </p>

          <Name>
            <h3>TAHIWI SELLARS</h3>
            <p>REAL ESTATE SALES AGENT AT RAY WHITE ST. MARYS</p>
          </Name>
        </TestiItem>
      </TestiContainer>
    </TestiMobileContainer>
  );
};

export default TestimonialMobile;
