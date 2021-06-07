import { ChevronRight } from "react-feather";
import MainNav from "./mainNav";
import { UserArea } from "./userArea";

export const MainSidebar = (): JSX.Element => (
  <aside className="mto-main-sidebar w-24 bg-primary h-full text-base-300 relative z-10">
    <nav className="h-full flex flex-col justify-between items-center">
      <div className="absolute w-8 h-8 bg-primary border rounded-r-full -right-4">
        {/* <button type="button" className="btn btn-circle btn-primary justify-end overflow-hidden border-none">
          <ChevronRight size="20" className="feather-chevron-left" />
        </button> */}
      </div>
      {/* open sub side nav button */}
      <div className="w-full h-24 flex items-center justify-center">logo</div>
      <div className="mto-main-nav-container">
        <MainNav />
      </div>
      <div className="mto-main-sidebar__user-area-container">
        <UserArea />
      </div>
    </nav>
  </aside>
)

export default MainSidebar
