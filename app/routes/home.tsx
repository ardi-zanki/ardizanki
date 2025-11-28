import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ardi" },
    { name: "description", content: "Welcome to ardizanki!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
