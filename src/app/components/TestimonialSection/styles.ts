import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${WorkMateColors.black};
  color: ${WorkMateColors.white};

  padding: 80px 0;

  gap: 80px;
  overflow-x: hidden;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  h3 {
    font-size: 36px;
  }

  p {
    font-size: 12px;
  }
`;

export const TestiList = styled.div`
  display: flex;
  gap: 200px;
  width: 100%;
  overflow-x: auto;
  padding: 10px 100px;
`;

export const TestiItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 700px;

  p {
    text-indent: 50px;
    font-size: 16px;
    line-height: 30px;
  }

  h3 {
    margin-top: 30px;
  }

  img {
    margin-bottom: 50px;
  }
`;

export const GreenHighlight = styled.span`
  background-color: ${WorkMateColors.green};
  color: ${WorkMateColors.darkGrey};
  border-radius: 5px;
`;

export const Name = styled.p`
  text-indent: 0 !important;
`;

export const ScrollContainer = styled.div`
  overflow-x: auto;
`;
