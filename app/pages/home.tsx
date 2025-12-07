import { Link } from "react-router";
import { Twitter, Github, Instagram, Linkedin, Link2, Box, Disc } from "lucide-react";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = ({ matches }: Route.MetaArgs) => {
  let { isProductionHost } = matches[0].data;
  let robots = isProductionHost ? "index,follow" : "noindex, nofollow";
  
  const siteUrl = "https://ardizanki.com";
  const previewImage = `${siteUrl}/og-image.png`;
  const title = "Ardi Zanki";
  const description = "Software Engineer based in Indonesia";
  
  return [
    { title: title },
    { name: "description", content: description },
    { name: "keywords", content: "QA engineer, software quality assurance, automation testing, playwright, API testing, web testing, software engineer, frontend engineer, react, typescript, javascript, open source, indonesia" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: robots },
    { name: "googlebot", content: robots },
    
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteUrl },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: previewImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "Ardizanki Portfolio" },
    
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: siteUrl },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: previewImage },
    { name: "twitter:creator", content: "@ardi_zanki" },
  ];
};

type QuickLink = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  to: string;
};

const quicklinks: QuickLink[] = [
  {
    icon: Twitter,
    title: "@ardi_zanki",
    to: "https://x.com/ardi_zanki",
  },
  {
    icon: Github,
    title: "ardi-zanki",
    to: "https://github.com/ardi-zanki",
  },
  {
    icon: Instagram,
    title: "ardi.zanki",
    to: "https://instagram.com/ardi.zanki",
  },
  {
    icon: Linkedin,
    title: "ardizanki",
    to: "https://www.linkedin.com/in/ardizanki",
  },
];

type Highlight = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    icon: Link2,
    title: "Quality-Obsessed",
    description:
      "End-to-end testing with Postman and Playwright, automated quality checks via GitHub Actions.",
  },
  {
    icon: Box,
    title: "Standards-Focused",
    description:
      "Structured documentation in Notion, data transparency with Sheets, agile tracking in Jira.",
  },
  {
    icon: Disc,
    title: "Simple and Clean",
    description:
      "Type-safe web applications built with React, React Router v7, and TypeScript.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-full w-full flex-col items-center justify-center dark:bg-gray-900">
      <section className="from-23% via-82% flex w-full flex-col items-center gap-y-12 bg-gradient-to-b from-[#CCD2DE] via-[#D9DDE6] to-white to-100% py-[96px] dark:from-[#595F6C] dark:via-[#202228] dark:via-65% dark:to-gray-900 md:py-[160px]">
        <p className="mx-12 max-w-[540px] text-center text-xl text-gray-700 dark:text-gray-200 md:mx-0">
          I am a software engineer specializing in quality assurance who loves to create 
          simple and clean web applications.
        </p>
        <div className="flex flex-col divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 md:h-[72px] md:flex-row md:divide-x md:divide-y-0">
          {quicklinks.map(({ icon: Icon, title, to }) => (
            <Link
              key={title}
              to={to}
              target="_blank"
              rel="noopener noreferrer"
              prefetch="intent"
              className="flex justify-center gap-x-2 px-9 py-6 text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <Icon className="h-6 w-6" />
              {title}
            </Link>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col items-center gap-y-24 px-12 pb-12 dark:bg-gray-900 md:gap-y-16 lg:gap-y-12">
        <h2 className="text-center text-3xl font-semibold text-gray-800 dark:text-gray-100">
          What to expect from my work:
        </h2>
        <dl className="grid max-w-[540px] gap-x-12 gap-y-6 lg:max-w-5xl lg:grid-flow-col">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="relative flex flex-col gap-2 pl-14">
              <dt className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                <Icon className="absolute left-0 top-0 h-8 w-8" />
                {title}
              </dt>
              <dd className="text-[#757575]">{description}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="grid h-[100px] w-full place-content-center place-items-center gap-y-6 bg-gray-50 p-12 dark:bg-black">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ardizanki.
        </p>
      </section>
    </main>
  );
}
