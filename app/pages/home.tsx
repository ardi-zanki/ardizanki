import { Link } from "react-router";
import { Twitter, Github, Linkedin, Globe, ClipboardList, Drama, Plug, Smartphone, Target, FileText, Zap } from "lucide-react";
import { useState } from "react";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = ({ matches }: Route.MetaArgs) => {
  let { isProductionHost } = matches[0].data;
  let robots = isProductionHost ? "index,follow" : "noindex, nofollow";
  
  const siteUrl = "https://ardizanki.com";
  const previewImage = `${siteUrl}/og-image.png`;
  const title = "Ardizanki - Software Engineer";
  const description = "Software Engineer based in Indonesia";
  
  return [
    { title: title },
    { name: "description", content: description },
    { name: "keywords", content: "QA engineer, automation testing, playwright, API testing, web testing, software engineer, user interface engineer, design engineer, frontend engineer, react, tanstack, typescript, javascript, open source" },
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
    { property: "og:site_name", content: "Ardizanki - Software Engineer" },
    
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: siteUrl },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: previewImage },
    { name: "twitter:creator", content: "@ardi_zanki" },
  ];
};

type Project = {
  title: string;
  description: string;
  url: string;
  preview: string;
  icon: React.ComponentType<{ className?: string }>;
};

const projects: Project[] = [
  {
    title: "Ardizanki Personal Website",
    description: "A simple and clean website built using React and TypeScript",
    url: "https://ardizanki.com/",
    preview: "/previews/ardizanki.png",
    icon: Globe,
  },
  {
    title: "Bug0 - Test Case Management",
    description: "Professional test management system for tracking and executing test cases",
    url: "https://bug0.ardizanki.com/",
    preview: "/previews/bug0.png",
    icon: ClipboardList,
  },
  {
    title: "Playwright Web Automation",
    description: "End-to-end automated testing for web applications",
    url: "https://github.com/ardi-zanki/playwright-web-automation-pom/",
    preview: "/previews/playwright-web.png",
    icon: Drama,
  },
  {
    title: "Playwright API Automation",
    description: "REST API testing with CI/CD integration",
    url: "https://github.com/ardi-zanki/playwright-api-automation/",
    preview: "/previews/playwright-api.png",
    icon: Plug,
  },
  {
    title: "Maestro Mobile Automation",
    description: "Automated testing for iOS and Android applications",
    url: "https://github.com/ardi-zanki/maestro-mobile-automation/",
    preview: "/previews/maestro-app.png",
    icon: Smartphone,
  },
];

type SocialLink = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  url: string;
};

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    title: "GitHub",
    url: "https://github.com/ardi-zanki",
  },
  {
    icon: Twitter,
    title: "X/Twitter",
    url: "https://x.com/ardi_zanki",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ardizanki/",
  },
];

type Highlight = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    icon: Target,
    title: "Quality Assurance Excellence",
    description:
      "Comprehensive testing strategies using Postman and Playwright, with automated CI/CD pipelines through GitHub Actions. I ensure your product works flawlessly before it reaches users.",
  },
  {
    icon: FileText,
    title: "Process & Documentation",
    description:
      "Clear, structured workflows with proper documentation in Notion, transparent data tracking in Google Sheets, and agile project management in Jira. You'll always know where your project stands.",
  },
  {
    icon: Zap,
    title: "Modern Web Development",
    description:
      "Fast, maintainable web applications built with React, TanStack, and TypeScript. Clean code that's easy to scale and update as your business grows.",
  },
];

function ProjectLink({ project }: { project: Project }) {
  const [showPreview, setShowPreview] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const Icon = project.icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="flex flex-col gap-1">
      <Link
        to={project.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onMouseMove={handleMouseMove}
        className="flex items-center gap-2 text-gray-800 dark:text-gray-100 underline w-fit"
      >
        <Icon className="h-4 w-4" />
        {project.title}
      </Link>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 pl-6">
        {project.description}
      </p>
      
      {showPreview && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${mousePosition.x + 20}px`,
            top: `${mousePosition.y + 20}px`,
          }}
        >
          <div className="rounded-lg border-2 border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
            <img
              src={project.preview}
              alt={`${project.title} preview`}
              className="w-[400px] h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250"><rect width="400" height="250" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" fill="%239ca3af" font-family="system-ui" font-size="16">Preview Not Available</text></svg>';
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-full w-full flex-col items-center justify-center dark:bg-gray-900">
      {/* Hero Section */}
      <section className="flex w-full flex-col items-center gap-y-6 py-16 pb-12 dark:bg-gray-900 md:pt-24">
        <div className="w-full max-w-[640px] px-6 md:px-0">
          <h1 className="text-left text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Ardizanki
          </h1>
          <p className="mt-4 text-left text-base text-gray-800 dark:text-gray-100">
            I'm a QA Engineer with 5 years of professional experience in delivering high-quality software 
            solutions. I specialize in test automation and API testing using Playwright and Postman. 
            Recently, I've been expanding my skills into Frontend Development, building web applications 
            with React, TanStack, and TypeScript.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex w-full flex-col items-center gap-y-6 pb-12 dark:bg-gray-900">
        <div className="w-full max-w-[640px] px-6 md:px-0">
          <h2 className="text-left text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            My Projects
          </h2>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <ProjectLink key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="flex w-full flex-col items-center gap-y-6 pb-12 dark:bg-gray-900">
        <div className="w-full max-w-[640px] px-6 md:px-0">
          <h2 className="text-left text-xl font-semibold text-gray-800 dark:text-gray-100">
            What I bring to your project
          </h2>
          <dl className="mt-6 grid gap-y-8">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-3">
                <Icon className="h-4 w-4 mt-1 shrink-0 text-gray-800 dark:text-gray-100" />
                <div className="flex flex-col gap-2">
                  <dt className="text-base font-semibold text-gray-800 dark:text-gray-100">
                    {title}
                  </dt>
                  <dd className="text-left text-base  text-gray-800 dark:text-gray-100">{description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="flex w-full flex-col items-center gap-y-6 pb-12 dark:bg-gray-900">
        <div className="w-full max-w-[640px] px-6 md:px-0">
          <p className="text-left text-base leading-relaxed text-gray-800 dark:text-gray-100">
            Want to know more about my work? Check out my thoughts and projects, or connect with me on{" "}
            {socialLinks.map((link, index) => (
              <span key={link.title}>
                <Link
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-800 dark:text-gray-100 underline"
                >
                  {link.title}
                </Link>
                {index < socialLinks.length - 1 && (index === socialLinks.length - 2 ? ", and " : ", ")}
              </span>
            ))}
            .
          </p>
        </div>
      </section>
    </main>
  );
}
