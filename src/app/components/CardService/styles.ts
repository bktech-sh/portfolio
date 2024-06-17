import styled from "@emotion/styled";

export const CardServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 350px;
  padding: 32px;
  gap: 16px;

  background-color: white;
  border-radius: 8px;

  h4 {
    font-weight: 500;
    font-size: 18px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }

  transition: box-shadow 0.3s ease-in-out;

  :hover {
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1),
      -4px -4px 20px 0px rgba(0, 0, 0, 0.1);
  }
`;
