import clsx from 'clsx'
import Link from 'next/link'
import { Grid, Aperture, ChevronDown, ChevronLeft } from 'react-feather'
import { useUI } from '../../../../../components/ui/context'

export const SubSidebar = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { displaySubSidebar } = useUI()

  return (
    <aside className={clsx("mto-sub-sidebar  bg-primary bg-opacity-10 h-full", displaySubSidebar ? 'visible w-80' : 'hidden w-0')}>
      <div className="flex flex-col px-6 text-gray-500 capitalize text-sm font-semibold">
        <div className="flex h-24 items-center space-x-8">
          <div>
            <button type="button" className="btn btn-sm btn-outline btn-circle border-blue-200">
              <ChevronLeft size="18" className="feather-chevron-left text-gray-500" />
            </button>
          </div>
          <div className="flex space-x-4">
            <div className="text-gray-400">
              <Grid size={20} />
            </div>
            <span className="block">dashboard</span>
          </div>
        </div>
        {/* title */}
        <div className="flex flex-col space-y-6">
          <div>
            <p className="text-gray-400 uppercase mb-2">navigation</p>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-between">
                    <span className="flex items-center space-x-4">
                      <span className="text-gray-400 group-hover:text-gray-500">
                        <Aperture size={16} className="feather" />
                      </span>
                      <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                    </span>
                    <span className="block">
                      <ChevronDown size={17} className="feather feather-chevron-down text-gray-400" />
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-between">
                    <span className="flex items-center space-x-4">
                      <span className="text-gray-400 group-hover:text-gray-500">
                        <Aperture size={16} className="feather" />
                      </span>
                      <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                    </span>
                    <span className="block">
                      <ChevronDown size={17} className="feather feather-chevron-down text-gray-400" />
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-between">
                    <span className="flex items-center space-x-4">
                      <span className="text-gray-400 group-hover:text-gray-500">
                        <Aperture size={16} className="feather" />
                      </span>
                      <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                    </span>
                    <span className="block">
                      <ChevronDown size={17} className="feather feather-chevron-down text-gray-400" />
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-start space-x-4">
                    <span className="text-gray-400 group-hover:text-gray-500">
                      <Aperture size={16} className="feather" />
                    </span>
                    <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-start space-x-4">
                    <span className="text-gray-400 group-hover:text-gray-500">
                      <Aperture size={16} className="feather" />
                    </span>
                    <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gray-400 uppercase mb-2">navigation</p>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-between">
                    <span className="flex items-center space-x-4">
                      <span className="text-gray-400 group-hover:text-gray-500">
                        <Aperture size={16} className="feather" />
                      </span>
                      <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                    </span>
                    <span className="block">
                      <ChevronDown size={17} className="feather feather-chevron-down text-gray-400" />
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-start space-x-4">
                    <span className="text-gray-400 group-hover:text-gray-500">
                      <Aperture size={16} className="feather" />
                    </span>
                    <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-between">
                    <span className="flex items-center space-x-4">
                      <span className="text-gray-400 group-hover:text-gray-500">
                        <Aperture size={16} className="feather" />
                      </span>
                      <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                    </span>
                    <span className="block">
                      <ChevronDown size={17} className="feather feather-chevron-down text-gray-400" />
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-start space-x-4">
                    <span className="text-gray-400 group-hover:text-gray-500">
                      <Aperture size={16} className="feather" />
                    </span>
                    <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-start space-x-4">
                    <span className="text-gray-400 group-hover:text-gray-500">
                      <Aperture size={16} className="feather" />
                    </span>
                    <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-between">
                    <span className="flex items-center space-x-4">
                      <span className="text-gray-400 group-hover:text-gray-500">
                        <Aperture size={16} className="feather" />
                      </span>
                      <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                    </span>
                    <span className="block">
                      <ChevronDown size={17} className="feather feather-chevron-down text-gray-400" />
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gray-400 uppercase mb-2">navigation</p>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-between">
                    <span className="flex items-center space-x-4">
                      <span className="text-gray-400 group-hover:text-gray-500">
                        <Aperture size={16} className="feather" />
                      </span>
                      <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                    </span>
                    <span className="block">
                      <ChevronDown size={17} className="feather feather-chevron-down text-gray-400" />
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-start space-x-4">
                    <span className="text-gray-400 group-hover:text-gray-500">
                      <Aperture size={16} className="feather" />
                    </span>
                    <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="group btn btn-ghost btn-block justify-start space-x-4">
                    <span className="text-gray-400 group-hover:text-gray-500">
                      <Aperture size={16} className="feather" />
                    </span>
                    <span className="text-sm font-semibold group-hover:text-gray-600">link name</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* nav */}
      </div>
      {/* parent all */}
    </aside>)
}
export default SubSidebar
