import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { ArrowRightIcon } from "@/components/icons";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="flex h-full gap-4 py-8 md:py-10 lg:mr-64">
      <div className="inline-block max-w m-auto">
        <h1 className={title()}>Hello.</h1>
        <br />
        <p className={subtitle({ class: "mt-4" })}>
          I am Poshan Peeroo, a Computer Science student at the University of Mauritius.
          I'm passionate about the problem-solving and creative aspects of programming.
          My skills include C++, Java, Kotlin, Python, and Golang, and next on the list is kernel development.
          In my free time, I enjoy reading manga, watching anime, and exploring new technologies.
        </p>
        <br />
        <br />
        <NextLink href={siteConfig.navItems[0].href} className="group flex gap-4 items-center">
          <div className="flex flex-col">
            <p>See more about me</p>
            <div className="block max-w-0 group-hover:max-w-24 transition-all duration-500 h-0.5 bg-foreground-500" />
          </div>

          <ArrowRightIcon className="transition ease-in-out delay-50 duration-200 group-hover:translate-x-4 w-6 h-6 text-default-500" size={3} />
        </NextLink>
      </div>
    </section>
  );
}
