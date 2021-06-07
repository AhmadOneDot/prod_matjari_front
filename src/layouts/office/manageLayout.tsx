import { MainSidebar } from "./components/sidebars/main/mainSidebar"
import { SubSidebar } from "./components/sidebars/sub/subSidebar"

type ManageLayoutProps = {
  children: React.ReactNode
}
export const ManageLayout = ({ children }: ManageLayoutProps): JSX.Element => (
  <div className="mto-layout mto-wrapper">
    <div className="flex h-screen max-h-screen min-h-screen w-full max-w-full min-w-full">
      <section className="mto-main-sidebar-container">
        <MainSidebar />
      </section>
      <section className="mto-sub-sidebar-container">
        <SubSidebar />
      </section>
      <main className="mto-main-content w-full bg-base-100">{children}</main>
    </div>
  </div>
)

export default ManageLayout