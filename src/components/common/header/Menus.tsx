"use client";

import DesktopMenus from "@/components/common/header/DesktopMenus";
import MenuDrawer from "@/components/common/header/MenuDrawer";
import { screens } from "@/styles/breakpoints";
import useMediaQuery from "@/utils/useMediaQuery";
import { useEffect, useState } from "react";

function Menus() {
  const [isMounted, setIsMounted] = useState(false);
  const isAboveTabScreen = useMediaQuery(`(min-width: ${screens.sm})`);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid hydration mismatch

  return <>{isAboveTabScreen ? <DesktopMenus /> : <MenuDrawer />}</>;
}

export default Menus;
