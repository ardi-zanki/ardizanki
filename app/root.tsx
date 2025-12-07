import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import tailwindCss from "~/styles/tailwind.css?url";
import type { Route } from "./+types/root";

export const loader = ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const isProductionHost = url.hostname === "ardizanki.com" || url.hostname === "www.ardizanki.com";
  return { isProductionHost };
};

export const links: Route.LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={tailwindCss} />
        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-white text-black antialiased selection:bg-blue-200 selection:text-black dark:bg-gray-900 dark:text-white dark:selection:bg-blue-800 dark:selection:text-white">
        {children}
        <ScrollRestoration />
        <Scripts />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 500) {
    console.error(error);
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="font-bold">Oops</div>
      <div>Something went wrong</div>
      <Link to="/" className="mt-8 underline">
        Go Home
      </Link>
    </div>
  );
}
