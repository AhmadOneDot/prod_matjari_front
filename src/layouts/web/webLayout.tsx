import Link from 'next/link'

type WebLayoutProps = {
  children: React.ReactNode
}

export const WebLayout = ({ children }: WebLayoutProps): JSX.Element => (
  <div className="mtw-wrapper mtw-layout font-sans-latin-base-en max-w-screen-2xl mx-auto font-normal text-gray-700">
    <section className="mtw-header-container">
      <header className="mtw-header p-12 fixed z-10 w-full">
        <div className="mtw-header-row flex items-center justify-between text-sm font-medium text-gray-500">
          <div className="mtw-logo-container">
            <h3 className="font-sans-latin-heading-en capitalize text-2xl">logo goes here</h3>
          </div>
          <nav className="mtw-main-nav">
            <ul className="mtw-main-nav_nav flex space-x-12">
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link capitalize">home</a>
                </Link>
              </li>
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link capitalize">pricing</a>
                </Link>
              </li>
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link capitalize">blog</a>
                </Link>
              </li>
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link capitalize">about us</a>
                </Link>
              </li>
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link capitalize">contact us</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mtw-user-area-container flex space-x-12 items-center">
            <Link href="/">
              <a className="mtw-main-nav_nav-link capitalize text-gray-800">sign in</a>
            </Link>
            <Link href="/">
              <a className="mtw-main-nav_nav-link capitalize btn btn-primary ">try for free</a>
            </Link>
          </div>
        </div>
      </header>
    </section>
    <main className="mtw-main-content">
      {children}
    </main>
    <footer className="mtw-footer">
      footer
    </footer>
  </div>
)

export default WebLayout