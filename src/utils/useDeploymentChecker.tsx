"use client";
import { useEffect } from "react";

export const useDeploymentCheck = () => {
  useEffect(() => {
    const fetchDeployInfo = async () => {
      try {
        const res = await fetch("/deploy-meta.json", { cache: "no-store" });
        const data = (await res.json()) as { deployedAt?: string };
        const deployedAt = data?.deployedAt;

        if (!deployedAt) return;

        const storedVersion = localStorage.getItem("lastCheck");

        if (storedVersion !== deployedAt) {
          console.warn("🔄 New deployment detected. Reloading...");
          localStorage.setItem("lastCheck", deployedAt); // store ISO
          window.location.reload(); // reload only once
        }
      } catch (e) {
        console.error("⚠️ Deployment check failed", e);
      }
    };

    void fetchDeployInfo();
  }, []);
};
