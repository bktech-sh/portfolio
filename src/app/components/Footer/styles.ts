import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 70px 10%;
  background-color: ${WorkMateColors.black};
  color: ${WorkMateColors.white};

  h6 {
    font-size: 14px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-right: 30px;
  min-width: 277px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  margin-left: 30px;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;

  :hover {
    cursor: pointer;
  }
`;
