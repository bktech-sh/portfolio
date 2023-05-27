import Image from "next/image";
import {
  GreenHighlight,
  Name,
  ScrollContainer,
  TestiItem,
  TestiList,
  TestimonialContainer,
  Title,
} from "./styles";
import profileIcon from "../../assets/images/profile.png";

const TestimonialSection = () => {
  return (
    <TestimonialContainer>
      <Title>
        <h3>Testimonials</h3>
        <p>Don't take our word for it. See what our clients say about us.</p>
      </Title>

      <TestiList>
        <TestiItem>
          <Image src={profileIcon} alt="profile" width={130} />

          <p>
            Before Virtual Workmate, I was overwhelmed with all of my tasks -
            calling, setting appointments, meeting with sellers, reaching out to
            more people. Before I knew it, I had already burned out. Then Ray
            contacted me. We have been colleagues since the days when he worked
            in Real Estate and introduced me to Virtual Workmate. Because I
            needed help, I signed up right away. After a few weeks, I'm still
            glad I did. I am getting much better leads now than
          </p>
          <p>
            I did when I did everything on my own. Owning a business is
            challenging enough, let alone handling everything yourself.{" "}
            <GreenHighlight>
              {" "}
              Working with Virtual Workmate has allowed me to focus on what I
              love to do - selling! I literally don't have to think about cold
              calling and appointment setting, I just get the leads they
              guarantee and meet the sellers. It's like magic!
            </GreenHighlight>
          </p>

          <h3>TAHIWI SELLARS</h3>
          <Name>Real Estate Sales Agent at Ray White St. Mary's</Name>
        </TestiItem>

        <TestiItem>
          <Image src={profileIcon} alt="profile" width={130} />

          <p>
            Before Virtual Workmate, I was overwhelmed with all of my tasks -
            calling, setting appointments, meeting with sellers, reaching out to
            more people. Before I knew it, I had already burned out. Then Ray
            contacted me. We have been colleagues since the days when he worked
            in Real Estate and introduced me to Virtual Workmate. Because I
            needed help, I signed up right away. After a few weeks, I'm still
            glad I did. I am getting much better leads now than
          </p>
          <p>
            I did when I did everything on my own. Owning a business is
            challenging enough, let alone handling everything yourself.{" "}
            <GreenHighlight>
              {" "}
              Working with Virtual Workmate has allowed me to focus on what I
              love to do - selling! I literally don't have to think about cold
              calling and appointment setting, I just get the leads they
              guarantee and meet the sellers. It's like magic!
            </GreenHighlight>
          </p>

          <h3>TAHIWI SELLARS</h3>
          <Name>Real Estate Sales Agent at Ray White St. Mary's</Name>
        </TestiItem>

        <TestiItem>
          <Image src={profileIcon} alt="profile" width={130} />

          <p>
            Before Virtual Workmate, I was overwhelmed with all of my tasks -
            calling, setting appointments, meeting with sellers, reaching out to
            more people. Before I knew it, I had already burned out. Then Ray
            contacted me. We have been colleagues since the days when he worked
            in Real Estate and introduced me to Virtual Workmate. Because I
            needed help, I signed up right away. After a few weeks, I'm still
            glad I did. I am getting much better leads now than
          </p>
          <p>
            I did when I did everything on my own. Owning a business is
            challenging enough, let alone handling everything yourself.{" "}
            <GreenHighlight>
              {" "}
              Working with Virtual Workmate has allowed me to focus on what I
              love to do - selling! I literally don't have to think about cold
              calling and appointment setting, I just get the leads they
              guarantee and meet the sellers. It's like magic!
            </GreenHighlight>
          </p>

          <h3>TAHIWI SELLARS</h3>
          <Name>Real Estate Sales Agent at Ray White St. Mary's</Name>
        </TestiItem>
      </TestiList>
    </TestimonialContainer>
  );
};

export default TestimonialSection;
