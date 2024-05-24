"use client"

import { Socials } from "@/components/socials";
import { usePathname } from "next/navigation";

export const Footer = () => {
    const path = usePathname();
    return (
        <footer>
            <Socials classNameLayout={`${path === '/contact' ? "lg:hidden" : path === "/about" ? "hidden" : ""} flex sticky w-full items-center lg:p-8 p-4 lg:justify-center lg:gap-8 justify-evenly`} />
        </footer>
    );
}