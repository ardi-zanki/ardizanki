import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ardi - Software Engineer" },
    { name: "description", content: "Software Engineer based in Indonesia" },
    { name: "keywords", content: "quality assurance, automation, interface, web development, web, app, api, database,technology, tech, software engineering, opinion" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
}

export default function Home() {
  return <Welcome />;
}
