import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row w-full h-full items-center justify-center gap-4 py-8 md:py-10">
      <div className="h-full justify-center items-center min-w-0">
        {children}
      </div>
    </section>
  );
}
