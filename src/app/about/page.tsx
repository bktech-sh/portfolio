"use client";

import { AppContainer } from "../styles";
import Header from "../components/Header";
import BKtechExplain from "./components/BKtechExplain";
import Vision from "./components/Vision";
import OurMission from "./components/OurMission";

const AboutPage = () => {
  return (
    <AppContainer>
      <Header />
      <BKtechExplain />
      <Vision />
      <OurMission />
    </AppContainer>
  );
};

export default AboutPage;
