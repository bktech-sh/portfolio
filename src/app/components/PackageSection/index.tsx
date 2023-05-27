import OutlinedButton from "../OutlinedButton";
import {
  CardContainer,
  CardItem,
  ContactUs,
  Description,
  Duration,
  GreyWord,
  Monthly,
  Package,
  PackageContainer,
  Price,
  PriceVaries,
  Pricing,
  Term,
  Title,
} from "./styles";

const PackageSection = () => {
  return (
    <PackageContainer>
      <Title>
        <h3>Our Packages</h3>
        <p>Choose the one that's right for you</p>
      </Title>

      <CardContainer>
        <CardItem>
          <Description>
            <Package>
              <p>Package 1</p>
            </Package>
            <h3>
              Part-Time <br />
              Virtual Assistant
            </h3>
            <Duration>
              86 hours <GreyWord>/month</GreyWord>
            </Duration>
          </Description>
          <Pricing>
            <Price>
              <Monthly>
                <h3>$1,419</h3>
                <p>
                  <GreyWord>/month</GreyWord>
                </p>
              </Monthly>
              <p>
                ($16.5 <GreyWord>/hour</GreyWord>)
              </p>
            </Price>

            <Term>90-day term, then month-to-month</Term>
          </Pricing>
        </CardItem>

        <CardItem>
          <Description>
            <Package>
              <p>Package 2</p>
            </Package>
            <h3>
              Full-Time <br />
              Virtual Assistant
            </h3>
            <Duration>
              86 hours <GreyWord>/month</GreyWord>
            </Duration>
          </Description>
          <Pricing>
            <Price>
              <Monthly>
                <h3>$2,595</h3>
                <p>
                  <GreyWord>/month</GreyWord>
                </p>
              </Monthly>
              <p>
                ($15 <GreyWord>/hour</GreyWord>)
              </p>
            </Price>

            <Term>90-day term, then month-to-month</Term>
          </Pricing>
        </CardItem>

        <CardItem>
          <Description>
            <Package>
              <p>Package 3</p>
            </Package>
            <h3>
              Specialist
              <br />
              Virtual Assistant
            </h3>
            <Duration>
              86 hours <GreyWord>/month</GreyWord>
            </Duration>
          </Description>
          <Pricing>
            <Price>
              <Monthly>
                <PriceVaries>Price varies</PriceVaries>
              </Monthly>
              <p>
                <GreyWord>based on specific needs</GreyWord>
              </p>
            </Price>

            <Term>90-day term, then month-to-month</Term>
          </Pricing>
        </CardItem>
      </CardContainer>

      <ContactUs>
        <h4>Ready to get started?</h4>
        <OutlinedButton size="medium" text="CONTACT US" />
      </ContactUs>
    </PackageContainer>
  );
};

export default PackageSection;
