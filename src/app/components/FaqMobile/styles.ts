import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const FaqMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  h6 {
    font-size: 22px;
    color: ${WorkMateColors.darkGrey};
  }

  p {
    font-size: 12px;
    color: ${WorkMateColors.darkGrey};
  }
`;

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export const AccordionContainer = styled.div`
  margin-bottom: 16px;
`;

export const AccordionItem = styled.div`
  border-top: 1px solid #ccc;

  &:first-of-type {
    border-top: none;
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  user-select: none;
  padding-bottom: 0;
  transition: transform 0.3s ease;

  img {
    transition: transform 0.5s ease;
    transform: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "rotate(-180deg)" : "rotate(0deg)"};
  }

  h6 {
    font-size: 12px;
    padding-right: 15px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translateY(-10px);
  `}
`;

export const AccordionContent = styled.div`
  padding: 0 40px 0 8px;
  height: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "auto" : "0")};
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  transition: height 1s ease, opacity 1s ease;

  p {
    font-size: 12px;
  }
`;
