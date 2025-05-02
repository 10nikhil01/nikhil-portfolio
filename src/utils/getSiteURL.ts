import { NEXT_APP_ENVIRONMENT } from "@/config/constant";

export function getSiteUrl(): string {
  return NEXT_APP_ENVIRONMENT === "PRODUCTION"
        ? "https://nikhil-portfolio-webdev.vercel.app/"
        : "http://localhost:3000";
}