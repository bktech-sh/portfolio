import styled from "@emotion/styled";

export const OurServicesMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  h4 {
    font-size: 32px;
    font-weight: 200;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    font-weight: 100;
    color: rgba(0, 0, 0, 0.6);
    line-height: 24px;
  }
`;

export const ServiceList = styled.div`
  display: flex;
  justify-content: center;
  gap: 120px;
  margin-bottom: 32px;
`;
