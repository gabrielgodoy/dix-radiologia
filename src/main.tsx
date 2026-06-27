import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.js";
import posthog from "posthog-js";
import { PostHogProvider } from "@posthog/react";

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Failed to find the root element. Ensure index.html has a <div id='root'></div>",
  );
}

posthog.init(import.meta.env.VITE_POSTHOG_PROJECT_TOKEN, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  defaults: "2026-01-30", // Applies recommended defaults
});

const root = createRoot(container);
root.render(
  <PostHogProvider client={posthog}>
    <App />
  </PostHogProvider>,
);
