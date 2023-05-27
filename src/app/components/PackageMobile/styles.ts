import { WorkMateColors } from "@/app/constants/colors";
import styled from "@emotion/styled";

export const PackageMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;

  background: url("images/package-background-mobile.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  gap: 30px;
`;

export const Title = styled.h3`
  font-size: 22px;
  color: ${WorkMateColors.darkGrey};
`;

export const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PackageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  h3 {
    color: ${WorkMateColors.darkGrey};
    margin-bottom: 12px;
    font-size: 14px;
  }
`;

export const Time = styled.p`
  font-weight: 100;
  font-size: 10px;
  color: ${WorkMateColors.mediumGrey};
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${WorkMateColors.darkGrey};
  margin-bottom: 12px;
`;

export const Annual = styled.span`
  font-weight: 100;
  font-size: 12px;
  color: ${WorkMateColors.mediumGrey};
`;

export const Term = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: ${WorkMateColors.mediumGrey};
  max-width: 250px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 110%;
  border-radius: 100%;
  background-color: ${WorkMateColors.lightGrey};
`;
