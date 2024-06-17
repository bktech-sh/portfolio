import { BktechColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  padding: 100px 0;

  background: url("images/package-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  h3 {
    font-size: 36px;
    color: ${BktechColors.darkGrey};
  }

  p {
    font-size: 12px;
    color: ${BktechColors.darkGrey};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 40px;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 370px;
  opacity: 0.7;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(155.5px);
  backdrop-filter: blur(155.5px);
  border-radius: 8px;
`;

export const Package = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 32px;
  background-color: ${BktechColors.green};
  border-radius: 50px;

  p {
    font-size: 12px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(115, 221, 183, 0.13);
  padding: 40px 50px;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  height: fit-content;

  h3 {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Duration = styled.p`
  font-size: 15px;
`;

export const GreyWord = styled.span`
  color: ${BktechColors.mediumGrey};
`;

export const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  gap: 8px;
  height: 100%;
  justify-content: space-between;
`;

export const Monthly = styled.div`
  display: flex;
  align-items: baseline;

  h3 {
    font-size: 22px;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Term = styled.p`
  font-size: 14px;
  color: ${BktechColors.mediumGrey};
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h4 {
    font-size: 18px;
    color: ${BktechColors.darkGrey};
  }
`;

export const PriceVaries = styled.h3`
  font-size: 2px;
`;
