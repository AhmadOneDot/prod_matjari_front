import Link from 'next/link'
import { Facebook, Twitter, Youtube, Instagram } from 'react-feather'

type WebLayoutProps = {
  children: React.ReactNode
}

const socialIcons = [
  { id: 1, icon: <Facebook className="w-5 h-5 feather" /> },
  { id: 2, icon: <Twitter className="w-5 h-5 feather" /> },
  { id: 3, icon: <Youtube className="w-5 h-5 feather" /> },
  { id: 4, icon: <Instagram className="w-5 h-5 feather" /> },
]

const footerItems = {
  useCases: {
    title: 'use cases',
    items: ['integral tool', 'admin panel', 'firebase admin panel', 'dashboard', 'customer portals']
  }
}
export const WebLayout = ({ children }: WebLayoutProps): JSX.Element => (
  <div className="mtw-wrapper mtw-layout font-sans-latin-base-en max-w-screen-2xl mx-auto font-normal text-gray-700">
    <section className="mtw-header-container">
      <header className="mtw-header py-12 px-24 fixed z-10 w-full">
        <div className="mtw-header-row flex items-center justify-between text-sm font-medium text-gray-400">
          <div className="mtw-logo-container">
            <h3 className="font-sans-latin-heading-en capitalize text-2xl">
              logo goes here
            </h3>
          </div>
          <nav className="mtw-main-nav capitalize">
            <ul className="mtw-main-nav_nav flex space-x-12">
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link hover:text-neutral">
                    home
                  </a>
                </Link>
              </li>
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link hover:text-neutral">
                    pricing
                  </a>
                </Link>
              </li>
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link hover:text-neutral">
                    blog
                  </a>
                </Link>
              </li>
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link hover:text-neutral">
                    about us
                  </a>
                </Link>
              </li>
              <li className="mtw-main-nav_nav-item">
                <Link href="/">
                  <a className="mtw-main-nav_nav-link hover:text-neutral">
                    contact us
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mtw-user-area-container flex space-x-12 items-center">
            <Link href="/">
              <a className="mtw-main-nav_nav-link capitalize text-gray-800">
                sign in
              </a>
            </Link>
            <Link href="/">
              <a className="mtw-main-nav_nav-link btn btn-primary">
                try for free
              </a>
            </Link>
          </div>
        </div>
      </header>
    </section>
    <main className="mtw-main-content">{children}</main>
    <section className="mtw-footer m-24">
      <footer>
        <div className="w-full flex justify-center space-x-8 text-gray-400">
          <div>
            <div className="flex flex-col space-y-6">
              <div>
                <h4 className="text-2xl text-primary">logo goes here</h4>
              </div>
              <div>
                <p className="text-sm max-w-xs w-64">
                  Build bassness without code from internal tools to customer
                  portals.
                </p>
              </div>
              <div className="flex space-x-4">
                {socialIcons.map((icon) => (
                  <button
                    key={icon.id}
                    type="button"
                    className="rounded-full bg-base-300 p-2 flex items-center justify-center hover:bg-primary hover:text-base-100"
                  >
                    {icon.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-4">

              <div className="flex flex-col space-y-4">
                <p className="text-gray-800 capitalize font-semibold">{footerItems.useCases.title}</p>
                <ul className="flex flex-col">
                  {
                    footerItems.useCases.items.map(item => (
                      <li key={item}>
                        <button type="button" className="btn btn-ghost">{item}</button>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-gray-800 capitalize font-semibold">{footerItems.useCases.title}</p>
                <ul className="flex flex-col">
                  {
                    footerItems.useCases.items.map(item => (
                      <li key={item}>
                        <button type="button" className="btn btn-ghost">{item}</button>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-4">
              <p className="text-gray-800 capitalize font-semibold">{footerItems.useCases.title}</p>
              <ul className="flex flex-col">
                {
                  footerItems.useCases.items.map(item => (
                    <li key={item}>
                      <button type="button" className="btn btn-ghost">{item}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-4">
              <p className="text-gray-800 capitalize font-semibold">{footerItems.useCases.title}</p>
              <ul className="flex flex-col">
                {
                  footerItems.useCases.items.map(item => (
                    <li key={item}>
                      <button type="button" className="btn btn-ghost">{item}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
)

export default WebLayout
