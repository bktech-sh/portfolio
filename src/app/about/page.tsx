"use client";

import { AppContainer } from "../styles";
import Header from "../components/Header";
import BKtechExplain from "./components/BKtechExplain";
import Vision from "./components/Vision";
import OurMission from "./components/OurMission";
import FAQ from "./components/FAQ";
import Footer from "../components/Footer";
import useIsAndroid from "../helpers/useIsAndroid";

const AboutPage = () => {
  const isAndroid = useIsAndroid();

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
