import webImg from "@/app/assets/images/services/web.png";
import consultantImg from "@/app/assets/images/services/consultant.png";
import graphicImg from "@/app/assets/images/services/graphic.png";
import uxImg from "@/app/assets/images/services/ui-ux.png";
import { Service } from "../types";

export const listServices: Service[] = [
  {
    imageService: webImg,
    title: "Website Development",
    description:
      "Unlock your digital vision, Experience top-notch website development. Your brand's success starts here. ",
      link: "",
  },
  {
    imageService: uxImg,
    title: "UI UX Consultant",
    description:
      "Unlock your digital vision, Experience top-notch website development. Your brand's success starts here. ",
      link: ""
  },
  {
    imageService: consultantImg,
    title: "IT Consulting",
    description:
      "Empower your business with strategic IT consulting. optimize technology for growth and efficiency!",
      link: ""
  },
  {
    imageService: graphicImg,
    title: "Graphic Design",
    description:
      "Unleash creativity with our graphic design expertise. Together, we'll bring your visions to life visually!",
      link: "https://drive.google.com/file/d/1J-NhcxKhl3lAjdezeC9Xo-DxOGHrRoX0/view?usp=sharing"
  },
];
