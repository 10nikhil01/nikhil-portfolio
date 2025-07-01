"use client";

import { useDeploymentCheck } from "@/utils/useDeploymentChecker";

export default function DeploymentChecker() {
  //   console.log("checking deployment...");
  useDeploymentCheck();
  return null;
}
