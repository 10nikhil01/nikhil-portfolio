import { FooterData, SocialLinks } from "@/components/common/footer/constant";
import StartConvoButton from "@/components/common/StartConversationButton";
import Link from "next/link";

function ThirdColumn() {
  return (
    <div className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center">
      <h3 className="pointer-events-none mb-3 text-lg font-semibold">{FooterData.ThirdHeading}</h3>
      <p className="pointer-events-none text-sm text-muted-foreground max-sm:text-center">
        {FooterData.SecondParagraph}
      </p>
      <div className="my-4 flex space-x-4 text-muted-foreground ">
        {SocialLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            rel="noopener noreferrer"
            href={href}
            target="_blank"
            className="text-xl hover:text-foreground dark:hover:text-amber-300"
            aria-label={label}
          >
            <Icon />
          </Link>
        ))}
      </div>
      <StartConvoButton />
    </div>
  );
}

export default ThirdColumn;
