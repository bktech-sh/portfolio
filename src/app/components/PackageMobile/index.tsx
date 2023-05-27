import { useRef } from "react";
import {
  Annual,
  Divider,
  PackageContainer,
  PackageItem,
  PackageMobileContainer,
  Price,
  Term,
  Time,
  Title,
} from "./styles";

interface PackageMobileInterface {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const PackageMobile = ({ sectionRef }: PackageMobileInterface) => {
  return (
    <PackageMobileContainer ref={sectionRef} id="package">
      <Title>Our Packages</Title>
      <PackageContainer>
        <PackageItem>
          <h3>TEAM</h3>
          <Time>Estimated between</Time>
          <Price>
            $20,800 - $31,200 AUD <Annual>annual</Annual>
          </Price>
          <Term>
            Team of 5 (min). Pricing varies between each VA depending on the
            deliverables and targets.{" "}
          </Term>
          <Divider />
        </PackageItem>

        <PackageItem>
          <h3>PREMIUM</h3>
          <Time>Part-time (20 hours a week)</Time>
          <Price>
            $31,200 AUD <Annual>annual</Annual>
          </Price>
          <Time>Full-time (40 hours a week)</Time>
          <Price>
            $29,120 AUD <Annual>annual</Annual>
          </Price>
          <Term>
            Includes lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod
          </Term>
          <Divider />
        </PackageItem>

        <PackageItem>
          <h3>SPECIALIST</h3>
          <Time>Part-time (20 hours a week)</Time>
          <Price>
            $37,440 AUD <Annual>annual</Annual>
          </Price>
          <Time>Full-time (40 hours a week)</Time>
          <Price>
            $35,360 AUD <Annual>annual</Annual>
          </Price>
          <Term>
            Includes Social Media Manager, Graphic Designer, Content Writer,
            Accountant, more
          </Term>
          <Divider />
        </PackageItem>
      </PackageContainer>
    </PackageMobileContainer>
  );
};

export default PackageMobile;
