import styled from "@emotion/styled";

export const CompanyPartnerMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3461ff0d;
  gap: 30px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 50px 50px 10px 50px;

  h4 {
    font-size: 32px;
    font-weight: 200;
  }

  p {
    font-size: 16px;
    font-weight: 100;
    color: rgba(0, 0, 0, 0.6);
    line-height: 24px;
  }
`;

export const ListCardProject = styled.div`
  padding: 20px 30px;
  display: flex;
  overflow-x: scroll;
  margin-bottom: 20px;
  gap: 20px;
  background: border-box;
`;
