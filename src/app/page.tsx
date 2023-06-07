"use client";

import Header from "./components/Header";
import Head from "next/head";
import { AppContainer } from "./styles";
import useIsAndroid from "./helpers/useIsAndroid";
import HeaderMobile from "./components/HeaderMobile";
import HeroSection from "./components/HeroSection";
import HeroSectionMobile from "./components/HeroSectionMobile";
import PrincipalSection from "./components/PrincipalSection";
import PrincipalMobile from "./components/PrincipalMobile";
import PackageSection from "./components/PackageSection";
import PackageMobile from "./components/PackageMobile";
import TestimonialSection from "./components/TestimonialSection";
import TestimonialMobile from "./components/TestimonialMobile";
import FaqSection from "./components/FaqSection";
import FaqMobile from "./components/FaqMobile";
import Footer from "./components/Footer";
import FooterMobile from "./components/FooterMobile";
import { useRef } from "react";

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
        </>
      )}
    </AppContainer>
  );
}
