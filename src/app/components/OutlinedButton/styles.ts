import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

interface ElevatedButtonProps {
  size: "small" | "medium" | "large";
  clicked: boolean;
}

export const ButtonContainer = styled.button`
  width: ${(props: ElevatedButtonProps) => {
    switch (props.size) {
      case "small":
        return "140px";
      case "medium":
        return "200px";
      case "large":
        return "321px";
    }
  }};

  border: 2px solid ${BktechColors.green};
  background-color: transparent;
  color: ${(props) =>
    props.clicked ? BktechColors.darkGrey : BktechColors.green};
  border-radius: 100px;
  padding: 8px 16px;
  font-weight: bold;

  background-color: ${(props) =>
    props.clicked ? BktechColors.green : "transparent"};

  :hover {
    cursor: pointer;
    color: ${(props) =>
      props.clicked ? BktechColors.darkGrey : BktechColors.white};
    background-color: ${BktechColors.green};
  }

  transition: background-color 0.5s ease;
`;
