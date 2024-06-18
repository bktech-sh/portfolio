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
  padding: 50px 100px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
  z-index: 1;
`;

export const PageLink = styled.div`
  display: flex;
  gap: 50px;
  padding-right: 20%;
`;

export const ButtonContactUs = styled.button`
  background-color: ${BktechColors.blue};
  border: none;
  height: 52px;
  border-radius: 30px;
  color: white;
  font-size: 16px;
  opacity: 100%;
  z-index: 2;
`;

export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BackdropFooter1 = styled.div`
  position: absolute;
  left: 0;
  bottom: -50%;
`;

export const BackdropFooter2 = styled.div`
  position: absolute;
  top: -30%;
  left: 50%;
`;

export const BackdropFooter3 = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
