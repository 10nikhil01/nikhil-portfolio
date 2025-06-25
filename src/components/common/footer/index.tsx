import BottomFooter from "@/components/common/footer/BottomFooter";
import FirstColumn from "@/components/common/footer/FirstColumn";
import SecondColumn from "@/components/common/footer/SecondColumn";
import ThirdColumn from "@/components/common/footer/ThirdColumn";

const Footer = () => {
  return (
    <footer role="contentinfo" className="mt-20 border-t border-t-foreground/20">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-12 md:py-10 lg:px-16">
        <div className="flex items-start justify-center gap-10 max-sm:flex-wrap sm:gap-16">
          <FirstColumn />
          <SecondColumn />
          <ThirdColumn />
        </div>
        <BottomFooter />
      </div>
    </footer>
  );
};

export default Footer;
