import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ardi - Test Engineer" },
    { name: "description", content: "Test Engineer based in Indonesia" },
    { name: "keywords", content: "test, quality assurance, automation, interface, api, technology, tech, software engineering, web development, web, app, opinion" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
}

export default function Home() {
  return <Welcome />;
}
