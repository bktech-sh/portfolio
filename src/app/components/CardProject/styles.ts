import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const CardProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  max-width: 250px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 4px 4px 40px 0px rgba(0, 0, 0, 0.1);
  box-shadow: -4px -4px 40px 0px rgba(0, 0, 0, 0.1);

  p {
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 16px;
    margin-bottom: 32px;
  }

  a {
    color: ${BktechColors.blue};
    text-decoration: underline;
  }
`;

export const DescriptionProject = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;
