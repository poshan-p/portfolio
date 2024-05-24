import { ExternalLinkIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { contentData, generalData, type Content } from "@/data/content";
import Image from "next/image";

export default function AboutPage() {
  return (
      <div className="max-w-2xl w-full mx-auto px-6 relative text-start min-h-screen">
        <section className="flex items-center">
          <Image
            alt="Author"
            src={generalData.avatar}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div className="ml-4">
            <h1 className={title({size: "sm"})}>
              {generalData.name}
            </h1>
            <p className={"text-sm font-light"}>
              {generalData.jobTitle}
            </p>
          </div>
        </section>
        <section className="my-9">
          <h3 className="mb-1 text-xl font-semibold">About</h3>
          <div className="text-base">
            <p>{generalData.about}</p>
          </div>
        </section>
        {contentData.map((content, index) => {
          return <Content {...content} key={index} />;
        })}
        <section className="my-14 text-sm">
          <h3 className="mb-6 text-xl font-semibold">Contact</h3>
          <div className="flex flex-col gap-6">
            {generalData.contacts.map((contact, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                    {contact.label}
                  </div>
                  <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex"
                    >
                      {contact.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-slate-900 dark:text-slate-100"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
  );
}

type ContentProps = Content;

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6 text-base font-semibold">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                {item.date}
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex">
                  <div className={`${item.href === '' ? "hidden" : ""} flex flex-col flex-1 text-slate-900 dark:text-slate-100`}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex"
                    >
                      {item.title}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-slate-900 dark:text-slate-100"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className={item.href === '' ? "" : "hidden"}>
                    <h4>{item.title}</h4>
                    <ExternalLinkIcon className={item.href === '' ? "hidden" : ""} />
                  </div>

                </div>

                <p className="text-slate-600 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
