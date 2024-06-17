import styled from "@emotion/styled";

export const OurServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 150px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  h4 {
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 8px;
  }

  p {
    font-size: 16;
    font-weight: 100;
    color: rgba(0, 0, 0, 0.6);
    line-height: 32px;
  }
`;

export const ServiceList = styled.div`
  display: flex;
  justify-content: center;
  gap: 120px;
  margin-bottom: 32px;
`;
