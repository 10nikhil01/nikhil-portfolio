"use client";
import { ThemeToggle } from "@/components/ThemeToggle";
import { type MidMenuItem, MidMenus } from "@/components/common/header/constant";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "@/icons/Menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
function MenuDrawer() {
  const pathname = usePathname();

  return (
    <Drawer>
      <DrawerTrigger className="ml-auto sm:hidden" asChild>
        <Button variant="outline" size={"icon"}>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto  w-full max-w-sm">
          <DrawerHeader>
            {MidMenus.map((menu: MidMenuItem) => {
              const isActive = pathname === menu.href;

              return (
                <DrawerClose asChild key={menu.href}>
                  <Link
                    href={menu.href}
                    className={cn(
                      "py-1 my-1 border-b-2 border-transparent",
                      isActive && "text-amber-300"
                    )}
                    aria-label={menu.label}
                    key={menu.label}
                  >
                    {menu.label}
                  </Link>
                </DrawerClose>
              );
            })}
            <div className="absolute right-5 top-5">
              <ThemeToggle />
            </div>
          </DrawerHeader>

          <DrawerFooter className="flex items-center ">
            <DrawerDescription>© 2025 Nikhil Kumar. All rights reserved.</DrawerDescription>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
