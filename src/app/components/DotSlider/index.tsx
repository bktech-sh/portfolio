import { Dot, DotContainer } from "./styles";

const DotSlider = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <DotContainer>
      <Dot isActive={activeIndex === 0} />
      <Dot isActive={activeIndex === 1} />
      <Dot isActive={activeIndex === 2} />
      <Dot isActive={activeIndex === 3} />
    </DotContainer>
  );
};

export default DotSlider;
