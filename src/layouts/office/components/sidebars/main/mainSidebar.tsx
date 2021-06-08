/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ChevronRight } from "react-feather";
import MainNav from "./mainNav";
import { UserArea } from "./userArea"
import { useUI } from '../../../../../components/ui/context'

export const MainSidebar = (): JSX.Element => {
  const { displaySubSidebar, openSubSidebar } = useUI()

  return (
    <aside className="mto-main-sidebar w-24 bg-primary h-full text-base-300 relative z-10">
      <nav className="h-full flex flex-col justify-between items-center">
        {
          !displaySubSidebar && (
            <button type="button" className="absolute w-8 h-8 bg-primary rounded-r-full -right-4 -top-1 text-base-200 flex items-center justify-end transform hover:scale-x-110" onClick={openSubSidebar}>
              <ChevronRight size="20" className="feather-chevron-left" />
            </button>
            // {/* open sub side nav button */}
          )
        }
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
}

export default MainSidebar
