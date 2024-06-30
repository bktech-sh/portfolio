import { StaticImageData } from "next/image";

export interface Service {
  imageService: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export interface Project {
  imageProject: StaticImageData;
  title: string;
  description: string;
  link: string;
}
