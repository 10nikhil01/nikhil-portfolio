import DesktopMenusSkeleton from "@/components/common/header/DesktopMenusSkeleton";
import MenuDrawer from "@/components/common/header/MenuDrawer";
import dynamic from "next/dynamic";

const DesktopMenus = dynamic(() => import("@/components/common/header/DesktopMenus"), {
  loading: () => <DesktopMenusSkeleton />,
});

function Menus() {
  return (
    <>
      <DesktopMenus />
      <MenuDrawer />
    </>
  );
}

export default Menus;
