import { FooterData } from "@/components/common/footer/constant";
import type { MidMenuItem } from "@/components/common/header/constant";
import { MidMenus } from "@/components/common/header/constant";
import Link from "next/link";

function SecondColumn() {
  return (
    <div className="flex flex-col justify-start max-sm:w-full max-sm:items-center max-sm:justify-center sm:mx-auto">
      <h3 className="pointer-events-none mb-2 text-lg font-semibold">{FooterData.SecondHeading}</h3>
      {MidMenus.slice(1).map((menu: MidMenuItem) => (
        <Link
          href={menu.href}
          className="my-1 text-sm text-muted-foreground hover:text-foreground dark:hover:text-amber-300"
          rel="noopener noreferrer"
          aria-label={menu.label}
          key={menu.label}
        >
          {menu.label}
        </Link>
      ))}
    </div>
  );
}

export default SecondColumn;
