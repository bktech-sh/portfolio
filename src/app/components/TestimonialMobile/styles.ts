import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const TestiMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  align-items: center;

  background-color: ${BktechColors.black};
  color: ${BktechColors.white};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;

  h3 {
    font-size: 22px;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    max-width: 300px;
  }
`;

export const TestiContainer = styled.div`
  display: flex;
`;

export const TestiItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  p {
    font-size: 12px;
    line-height: 21px;
    max-width: 300px;
  }
`;

export const Name = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;

  h3 {
    font-size: 22px;
  }
`;
