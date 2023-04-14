import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import {
  SiDaisyui,
  SiFirebase,
  SiMui,
  SiNodedotjs,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

export interface IFooterData {
  id: number;
  title: string;
  icon: JSX.Element;
  href?: string;
}

export const STACK_DATA: IFooterData[] = [
  {
    id: 1,
    title: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    id: 2,
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 3,
    title: "React",
    icon: <FaReact />,
  },
  {
    id: 4,
    title: "Redux",
    icon: <SiRedux />,
  },
  {
    id: 5,
    title: "Router",
    icon: <SiReactrouter />,
  },
  {
    id: 6,
    title: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    id: 7,
    title: "MUI",
    icon: <SiMui />,
  },
  {
    id: 8,
    title: "daisyUI",
    icon: <SiDaisyui />,
  },
  {
    id: 9,
    title: "Firebase",
    icon: <SiFirebase />,
  },
  {
    id: 10,
    title: "Node.js",
    icon: <SiNodedotjs />,
  },
];

export const SOCIAL_DATA: IFooterData[] = [
  {
    id: 1,
    title: "Github",
    icon: <BsGithub />,
    href: "https://github.com/Dymek507/"
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/damian-dominik/"
  },
  {
    id: 3,
    title: "Email",
    icon: <MdAlternateEmail />,
    href: "mailto:'damian_dominik5@gmail.com'?subject='Job offer'&body='Hello, I would like to hire you.'"
  },
];
