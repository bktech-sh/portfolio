import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const FooterMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${WorkMateColors.black};
  color: ${WorkMateColors.white};

  align-items: center;
  padding: 50px 20px;
  text-align: center;
  gap: 20px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h6 {
    font-size: 12px;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 20px;

  img {
    :hover {
      cursor: pointer;
    }
  }
`;
