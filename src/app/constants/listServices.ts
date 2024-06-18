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
  },
  {
    imageService: uxImg,
    title: "UI UX Consultant",
    description:
      "Unlock your digital vision, Experience top-notch website development. Your brand's success starts here. ",
  },
  {
    imageService: consultantImg,
    title: "IT Consulting",
    description:
      "Empower your business with strategic IT consulting. optimize technology for growth and efficiency!",
  },
  {
    imageService: graphicImg,
    title: "Graphic Design",
    description:
      "Unleash creativity with our graphic design expertise. Together, we'll bring your visions to life visually!",
  },
];
