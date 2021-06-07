import { Store24, Meter24, Product24, Datastore24, Identification24 } from '@carbon/icons-react'

const MainNav = (): JSX.Element => (
  <ul className="mto-main-nav-container flex flex-col space-y-8">

    <button type="button" className="flex items-center justify-center p-3 bg-primary-focus bg-opacity-50 shadow-sm hover:bg-opacity-100 transition ease-in hover:shadow-lg hover:text-primary-content rounded-xl">
      <Meter24 />
    </button>
    <button type="button" className="flex items-center justify-center p-3 bg-primary-focus bg-opacity-20 shadow-sm hover:bg-opacity-100 transition ease-in hover:shadow-lg hover:text-primary-content rounded-xl">
      <Store24 />
    </button>
    <button type="button" className="flex items-center justify-center p-3 bg-primary-focus bg-opacity-20 shadow-sm hover:bg-opacity-100 transition ease-in hover:shadow-lg hover:text-primary-content rounded-xl">
      <Product24 />
    </button>
    <button type="button" className="flex items-center justify-center p-3 bg-primary-focus bg-opacity-20 shadow-sm hover:bg-opacity-100 transition ease-in hover:shadow-lg hover:text-primary-content rounded-xl">
      <Datastore24 />
    </button>
    <button type="button" className="flex items-center justify-center p-3 bg-primary-focus bg-opacity-20 shadow-sm hover:bg-opacity-100 transition ease-in hover:shadow-lg hover:text-primary-content rounded-xl">
      <Identification24 />
    </button>
  </ul>
)

export default MainNav
