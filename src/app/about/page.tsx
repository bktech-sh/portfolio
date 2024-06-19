"use client";

import { AppContainer } from "../styles";
import Header from "../components/Header";
import BKtechExplain from "./components/BKtechExplain";
import Vision from "./components/Vision";
import OurMission from "./components/OurMission";
import FAQ from "./components/FAQ";
import Footer from "../components/Footer";
import useIsAndroid from "../helpers/useIsAndroid";
import HeaderMobileV2 from "../components/HeaderMobileV2";
import BKtechExplainMobile from "./components/BKtechExplainMobile";
import VisionMobile from "./components/VisionMobile";
import OurMissionMobile from "./components/OurMissionMobile";

const AboutPage = () => {
  const isAndroid = useIsAndroid();

  if (isAndroid) {
    return (
      <AppContainer>
        <HeaderMobileV2 />
        <BKtechExplainMobile />
        <VisionMobile />
        <OurMissionMobile />
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <Header activeTab="about" />
      <BKtechExplain />
      <Vision />
      <OurMission />
      <FAQ />
      <Footer />
    </AppContainer>
  );
};

export default AboutPage;
