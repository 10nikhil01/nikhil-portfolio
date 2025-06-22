import Menus from "@/components/common/header/Menus";
import ScrollHeaderWrapper from "@/components/common/header/ScrollHeaderWrapper";
import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <ScrollHeaderWrapper>
        <div className="flex h-20 w-full items-center px-5 text-foreground">
          <Link href="/" aria-label="company-logo">
            <Image
              src={"/Logo.png"}
              width={60}
              unoptimized={false}
              quality={100}
              height={50}
              alt="Portfolio | Logo"
            />
          </Link>
          <Menus />
          <ThemeToggle className="max-sm:hidden" />
        </div>
      </ScrollHeaderWrapper>
    </div>
  );
}

export default Header;
