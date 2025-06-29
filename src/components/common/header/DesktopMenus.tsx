"use client";
import { MidMenus, type MidMenuItem } from "@/components/common/header/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DesktopMenus() {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex items-center justify-center max-sm:hidden max-lg:mx-auto gap-8 px-6 text-black dark:text-amber-300 py-2 rounded-full font-medium transition-all duration-300 lg:ml-auto "
      )}
    >
      {MidMenus.map((menu: MidMenuItem) => {
        const isActive = pathname === menu.href;
        return (
          <Link
            href={menu.href}
            className={cn(
              "py-1 my-1 border-b-2 border-transparent hover:border-b-2 hover:border-foreground/80 dark:hover:border-amber-300",
              isActive && "dark:border-background/80 border-foreground/80"
            )}
            aria-label={menu.label}
            key={menu.label}
          >
            {menu.label}
          </Link>
        );
      })}
    </div>
  );
}

export default DesktopMenus;
