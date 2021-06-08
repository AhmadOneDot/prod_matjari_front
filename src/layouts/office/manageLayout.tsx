import clsx from 'clsx'
import { useUI } from '../../components/ui/context'
import { MainSidebar } from "./components/sidebars/main/mainSidebar"
import { SubSidebar } from "./components/sidebars/sub/subSidebar"

type ManageLayoutProps = {
  children: React.ReactNode
}
export const ManageLayout = ({ children }: ManageLayoutProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { displaySubSidebar } = useUI()

  return (
    <div className="mto-layout mto-wrapper">
      <div className="flex h-screen max-h-screen min-h-screen w-full max-w-full min-w-full">
        <section className="mto-main-sidebar-container">
          <MainSidebar />
        </section>
        <section className="mto-sub-sidebar-container">
          <SubSidebar />
        </section>
        <main className="mto-main-content w-full bg-primary bg-opacity-5 h-screen max-h-screen min-h-screen">
          <div className="flex">
            <div className="flex-grow w-full h-screen max-h-screen min-h-screen inb-scrollbar overflow-y-auto p-6">
              {children}
            </div>
            <div className={clsx("flex-shrink-0  p-6 bg-base-200 h-screen max-h-screen min-h-screen inb-scrollbar overflow-y-auto", displaySubSidebar ? 'hidden w-0' : 'visible w-1/4')}>
              lorem1000
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export default ManageLayout