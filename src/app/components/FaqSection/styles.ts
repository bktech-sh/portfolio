import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const FAQSectionContainer = styled.div`
  display: flex;
  padding: 50px 130px;
  margin-top: 100px;
  gap: 10%;
  justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;

  h4 {
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

export const InputEmail = styled.input`
  background: rgba(250, 250, 250, 1);
  border: none;
  height: 52px;
  width: 250px;
  border-radius: 37px;
  padding: 10px 20px;
`;

export const EmailInput = styled.div`
  display: flex;
  gap: 16px;
`;
