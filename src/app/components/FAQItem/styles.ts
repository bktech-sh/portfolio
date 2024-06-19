import styled from "@emotion/styled";

export const FAQItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 30px 0;
  justify-content: space-between;
  gap: 30px;
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
`;

export const Answer = styled.div`
  display: flex;
  text-align: start;
  padding: 0 0 0 20px;
  transition: "all .2s";
`;
