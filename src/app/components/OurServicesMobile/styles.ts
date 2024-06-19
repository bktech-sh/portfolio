import styled from "@emotion/styled";

export const OurServicesMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 50px 20px 50px;

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
  overflow-x: scroll;
  margin-bottom: 20px;
  gap: 20px;
  background: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 20px;
`;
