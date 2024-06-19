"use client";

import Image from "next/image";
import Header from "../components/Header";
import useIsAndroid from "../helpers/useIsAndroid";
import { AppContainer } from "../styles";
import postcard from "@/app/assets/images/portofolio/portofolio.png";
import { ImageContainer } from "./components/styles";
import HeaderMobileV2Portfolio from "../components/HeaderMobileV2Portfolio";
import ListProjects from "./components/ListProjects";
import ListProjectsMobile from "./components/ListProjectsMobile";
import FooterMobile from "../components/FooterMobile";
import Footer from "../components/Footer";

const Portfolio = () => {
  const isAndroid = useIsAndroid();

  if (isAndroid) {
    return (
      <AppContainer>
        <HeaderMobileV2Portfolio />
        <ImageContainer>
          <Image
            src={postcard}
            alt="postcard"
            fill
            style={{ objectFit: "cover", overflow: "hidden" }}
            quality={100}
          />
        </ImageContainer>
        <ListProjectsMobile />
        <FooterMobile />
      </AppContainer>
    );
  }
  return (
    <AppContainer>
      <Header activeTab="portofolio" />
      <ImageContainer>
        <Image
          src={postcard}
          alt="postcard"
          fill
          style={{ objectFit: "cover", overflow: "hidden" }}
          quality={100}
        />
      </ImageContainer>
      <ListProjects />
      <Footer />
    </AppContainer>
  );
};

export default Portfolio;
