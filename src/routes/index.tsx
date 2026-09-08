import { createFileRoute } from "@tanstack/react-router";
import AdTechApp from "@/features/adtech-app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arteria Network — Programmatic DOOH Media Exchange" },
      {
        name: "description",
        content:
          "Plan, book and report on digital out-of-home campaigns across Jakarta and Bali with live audience sensors, trigger playbooks and flight plans.",
      },
      { property: "og:title", content: "Arteria Network — Programmatic DOOH Media Exchange" },
      {
        property: "og:description",
        content:
          "Discover premium DOOH screens, build flight plans and generate campaign reports in one enterprise workspace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdTechApp,
});
