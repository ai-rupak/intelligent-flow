import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[120px] leading-none text-gradient-brand">404</h1>
        <h2 className="mt-4 font-heading text-2xl font-semibold text-[var(--ink)]">Page not found</h2>
        <p className="mt-2 text-[14px] text-[var(--ink-3)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-brand-h px-8 h-12 text-[14px] font-medium text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CentricaSoft — Intelligence, Engineered." },
      {
        name: "description",
        content:
          "CentricaSoft builds AI Agents, GenAI platforms, and enterprise data infrastructure that scale without limits.",
      },
      { name: "author", content: "CentricaSoft LLC" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700,800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://api.fontshare.com" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SmoothScrollProvider>
      <GrainOverlay />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
