import styled from "@emotion/styled";

export const FAQSectionMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-top: 50px;
  gap: 10%;
  justify-content: center;
  margin-bottom: 100px;
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
  margin-top: 40px;

  h4 {
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const InputEmail = styled.input`
  background: rgba(250, 250, 250, 1);
  border: none;
  height: 52px;
  width: 150px;
  border-radius: 37px;
  padding: 10px 20px;
`;

export const EmailInput = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonTalk = styled.button`
  background-color: #2652ee;
  border: none;
  height: 52px;
  width: 112px;
  border-radius: 15px;
  color: white;
  z-index: 2;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e45c0;
    color: #ffffff;
  }
`;
