import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  display: flex;
  background: linear-gradient(
    to bottom,
    ${BktechColors.darkPurple},
    ${BktechColors.darkPurple}
  );
  color: white;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  gap: 20px;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
`;

export const PageLink = styled.div`
  display: flex;
`;

export const ButtonContactUs = styled.button`
  background-color: ${BktechColors.blue};
  border: none;
  height: 52px;
  border-radius: 30px;
  color: white;
  font-size: 16px;
`;
