"use client";

import Header from "./components/Header";
import Head from "next/head";
import { AppContainer } from "./styles";
import useIsAndroid from "./helpers/useIsAndroid";
import HeaderMobile from "./components/HeaderMobile";
import HeroSection from "./components/HeroSection";
import HeroSectionMobile from "./components/HeroSectionMobile";
import { useRef } from "react";
import CompanyPartner from "./components/CompanyPartner";
import OurServices from "./components/OurServices";

export default function Home() {
  const isAndroid = useIsAndroid();

  const packageMobileRef = useRef<HTMLDivElement>(null);
  const principalMobileRef = useRef<HTMLDivElement>(null);
  const testimonialMobileRef = useRef<HTMLDivElement>(null);
  const faqMobileRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    switch (sectionId) {
      case "package":
        if (packageMobileRef.current) {
          packageMobileRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "principal":
        if (principalMobileRef.current) {
          principalMobileRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "testimonial":
        if (testimonialMobileRef.current) {
          testimonialMobileRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "faq":
        if (faqMobileRef.current) {
          faqMobileRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  };

  return (
    <AppContainer>
      <Head>
        <link rel="shortcut icon" href="/main-logo.png" />
      </Head>

      {isAndroid ? (
        <>
          <HeaderMobile scrollToSection={scrollToSection} />
          <HeroSectionMobile />
        </>
      ) : (
        <>
          <Header />
          <HeroSection />
          <CompanyPartner />
          <OurServices />
        </>
      )}
    </AppContainer>
  );
}
