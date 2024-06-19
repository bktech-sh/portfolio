"use client";

import Header from "./components/Header";
import Head from "next/head";
import { AppContainer } from "./styles";
import useIsAndroid from "./helpers/useIsAndroid";
import HeroSection from "./components/HeroSection";
import HeroSectionMobile from "./components/HeroSectionMobile";
import CompanyPartner from "./components/CompanyPartner";
import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";
import FAQSection from "./components/FaqSection";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import HeaderMobileV2 from "./components/HeaderMobileV2";
import HeroSectionMobileV2 from "./components/HeroSectionMobileV2";
import CompanyPartnerMobile from "./components/CompanyPartnerMobile";
import OurServicesMobile from "./components/OurServicesMobile";
import ContactUsMobile from "./components/ContactUsMobile";
import FAQSectionMobile from "./components/FaqSectionMobile";

export default function Home() {
  const isAndroid = useIsAndroid();

  return (
    <AppContainer>
      <Head>
        <link rel="shortcut icon" href="/main-logo.png" />
      </Head>

      {isAndroid ? (
        <>
          <HeaderMobileV2 />
          <HeroSectionMobileV2 />
          <CompanyPartnerMobile />
          <OurServicesMobile />
          <ContactUsMobile />
          <FAQSectionMobile />
        </>
      ) : (
        <>
          <Header />
          <HeroSection />
          <CompanyPartner />
          <OurServices />
          <ContactUs />
          <FAQSection />
          <Footer />
          <CopyRight />
        </>
      )}
    </AppContainer>
  );
}
