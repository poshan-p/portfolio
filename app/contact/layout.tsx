import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center gap-4 py-8 md:py-10">
        {children}
    </section>
  );
}
