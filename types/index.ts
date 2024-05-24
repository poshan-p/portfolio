import { SVGProps } from "react";
import { socials } from "@/data/socials";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type socials = typeof socials;