import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 150px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 15px;

  h3 {
    font-size: 48px;
    color: ${BktechColors.darkGrey};
  }

  p {
    font-size: 16px;
    color: ${BktechColors.darkGrey};
  }
`;

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

export const AccordionItem = styled.div`
  border-top: 1px solid #ccc;

  &:first-of-type {
    border-top: none;
  }
`;

export const Answer = styled.div`
  display: flex;
  color: ${BktechColors.mediumGrey};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 10%;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  user-select: none;

  img {
    transition: transform 0.5s ease;
    transform: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "rotate(-180deg)" : "rotate(0deg)"};
  }

  h6 {
    font-size: 16px;
    padding-right: 15px;
  }
`;

export const AccordionContainer = styled.div`
  margin-bottom: 16px;
`;

export const AccordionContent = styled.div`
  padding: 0 16px 16px;
  height: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "auto" : "0")};
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  transition: height 1s ease, opacity 1s ease;

  p {
    padding-right: 50px;
  }
`;
