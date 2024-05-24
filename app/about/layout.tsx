import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full gap-4 py-8 md:py-10">
        {children}
    </section>
  );
}
