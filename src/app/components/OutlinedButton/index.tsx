import { useState } from "react";
import { ButtonContainer } from "./styles";

const OutlinedButton = ({
  text,
  size,
}: {
  text: string;
  size: "small" | "medium" | "large";
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 100); // 500 milliseconds = 0.5 seconds
  };

  return (
    <ButtonContainer size={size} onClick={handleClick} clicked={clicked}>
      {text}
    </ButtonContainer>
  );
};

export default OutlinedButton;
