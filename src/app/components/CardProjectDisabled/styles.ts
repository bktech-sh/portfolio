import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const CardProjectDisabledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  max-width: 250px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 4px 4px 40px 0px rgba(0, 0, 0, 0.1),
    -4px -4px 40px 0px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Overlay = styled.div`
  filter: blur(5px);
  opacity: 0.3;
  pointer-events: none; /* Disables interactions */

  img {
    filter: blur(2px);
  }

  p,
  a {
    color: rgba(0, 0, 0, 0.3);
  }

  p {
    margin-top: 16px;
    margin-bottom: 32px;
  }

  a {
    text-decoration: underline;
  }
`;

export const NotAvailableText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  pointer-events: none; /* Disables interactions */
`;
