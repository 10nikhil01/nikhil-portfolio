import { FooterData } from "@/components/common/footer/constant";

function FirstColumn() {
  return (
    <div className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center">
      <h2 className="pointer-events-none text-2xl font-bold">{FooterData.FirstHeading}</h2>
      <p className="pointer-events-none mt-2 text-sm text-muted-foreground max-sm:text-center">
        {FooterData.FirstParagraph}
      </p>
    </div>
  );
}

export default FirstColumn;
