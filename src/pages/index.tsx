import Link from 'next/link'
import clsx from 'clsx'
import { Play, ChevronRight, Layers, Command, Zap } from 'react-feather'
import { WebLayout as Layout } from '../layouts/web/webLayout'

const brands = [
  {
    id: 1,
    name: 'ekar',
    src: '/landing/ekar.png',
  },
  {
    id: 2,
    name: 'village',
    src: '/landing/village-capital.png',
  },
  {
    id: 3,
    name: 'canix',
    src: '/landing/canix.png',
  },
  {
    id: 4,
    name: 'bold',
    src: '/landing/bold.png',
  },
  {
    id: 5,
    name: 'bamboo',
    src: '/landing/bamboo.png',
  },
  {
    id: 6,
    name: 'zip',
    src: '/landing/zip.png',
  },
  {
    id: 7,
    name: 'blowFire',
    src: '/landing/blow-fire.png',
  },
]

const features = [
  {
    id: 1,
    src: '/visually-build-icon-1.svg',
    title: 'More than 50+ components',
    body: 'Use predefined components to build a UI from scratch, or take a free template & customize it as you need.',
  },
  {
    id: 2,
    src: '/landing/visually-build-icon-2.png',
    title: 'Collaborate with your teammates',
    body: 'Assign tasks, leave notes, and chat with the team on top of your data.',
  },
  {
    id: 3,
    src: '/visually-build-icon-3.svg',
    title: 'Customize your workflow',
    body: 'Automate tasks like sending an email to a user when their order status changes or payment goes through.',
  },
]

const empowering = [
  {
    id: 1,
    icon: <Layers className="w-10 h-10 text-error feather" />,
    title: 'SQL & API Querying',
    body: 'Create custom SQL or HTTP queries to implement custom actions, tables, forms, and more.',
  },
  {
    id: 2,
    icon: <Command className="w-10 h-10 text-error feather" />,
    title: 'JavaScript',
    body: 'Transform responses using JavaScript: combine fields, convert data from one format to another, and so on.',
  },
  {
    id: 3,
    icon: <Zap className="w-10 h-10 text-error feather" />,
    title: 'Custom components',
    body: 'If you want to extend your app even further, you can always code your own components using JS SDK for Angular/React/Vue, HTML, and CSS',
  },
]

const adminList = [
  {
    id: 1,
    body: 'Manage data (create/read/update/delete) from your databases and business apps',
  },
  {
    id: 2,
    body: 'Build charts on top of your Firebase data',
  },
  {
    id: 3,
    body: 'Assign granular read/write permissions at the field level without any line of code',
  },
  {
    id: 4,
    body: 'Collaborate with your teammates: tasks, messages and activity logs',
  },
]

const adminFeature = [
  {
    id: 1,
    icon: <Layers className="w-6 h-6" />,
    title: 'admin panel',
    active: true,
  },
  {
    id: 2,
    icon: <Command className="w-6 h-6" />,
    title: 'stripe refund toll',
    active: false,
  },
  {
    id: 3,
    icon: <Zap className="w-6 h-6" />,
    title: 'on boarding toll',
    active: false,
  },
  {
    id: 4,
    icon: <Zap className="w-6 h-6" />,
    title: 'customer support tool',
    active: false,
  },
]

const IndexPage = (): React.ReactElement => (
  <Layout>
    <div className="mtw-page mtw-landing-page">
      <section className="mtw-section mtw-landing-section mtw-landing-section__banner relative">
        <div className="w-full flex items-center">
          <div className="w-1/2 flex flex-col pl-24">
            <div className="max-w-md">
              <h3 className="text-4xl font-black capitalize leading-normal">
                lunch your own bassness, with few clicks
              </h3>
            </div>
            <div className="max-w-md mt-2">
              <p className="text-lg font-normal text-gray-400 leading-normal">
                Build apps for your teams without engineering effort. Start your
                free 14-day trial
              </p>
            </div>
            <div className="flex items-center space-x-8 mt-6">
              <Link href="/">
                <a className="btn btn-primary btn-lg">get start for free</a>
              </Link>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="btn btn-sm btn-primary btn-outline btn-circle border-2"
                >
                  <Play className="w-4 h-4 feather-play fill-current" />
                </button>
                <div className="flex flex-col text-sm font-medium">
                  <span className="block text-primary">watch demo</span>
                  <span className="block text-base-300">2min</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative h-screen">
            <img
              src="/landing/banner_bg.svg"
              alt="site title"
              className="object-cover absolute bottom-0 right-0"
            />
            <img
              src="/landing/Screenshot.png"
              alt="site name"
              className="absolute top-1/2 left-0 -mt-24 transform -skew-x-1 skew-y-1 origin-bottom-right rotate-6 w-4/5 object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      {/* Banner */}

      <section className="mtw-section mtw-landing-section mtw-landing-section__trusted-companies px-24 pt-24 pb-12">
        <div className="">
          <div className="flex items-center justify-center">
            <p className="uppercase font-medium text-gray-400">
              trusted by some the world market in the world, some title goes
              here
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap space-x-0 lg:space-x-6 mt-4">
          {brands.map((brand) => (
            <div key={brand.id} className="w-32">
              <img src={brand.src} alt={brand.name} />
            </div>
          ))}
        </div>
      </section>
      {/* trusted clients */}

      <section className="mtw-section mtw-landing-section mtw-landing-section__video px-24 pb-28">
        <div className="bg-cover bg-center flex items-center justify-center h-v-1/2-screen rounded-xl shadow-2xl bg-primary relative overflow-hidden">
          <img
            src="/landing/Screenshot.png"
            alt="site name"
            className="object-cover absolute inset-0 w-full h-full z-0"
          />
          <div className="bg-primary bg-opacity-20 w-full h-full flex items-center justify-center relative cursor-pointer hover:bg-opacity-40">
            <div className="w-80 rounded-full bg-base-100 h-20 flex px-10 items-center transform hover:scale-105 relative">
              <div className="h-full flex flex-col justify-center space-y-1">
                <p className="text-xs font-semibold capitalize">
                  build your store in 5 min
                </p>
                <button
                  type="button"
                  className="flex items-center justify-center text-xs text-primary"
                >
                  <span className="font-medium">watch now</span>
                  <span>
                    <ChevronRight className="w-4 h-4 feather-chevron-right" />
                  </span>
                </button>
              </div>
              <div className="absolute right-0 w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                <button
                  type="button"
                  className="flex items-center justify-center text-base-100 rounded-full h-12 w-12 border-4 border-base-100"
                >
                  <Play className="feather-play fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mtw-section mtw-landing-section mtw-landing-section__feature bg-neutral text-base-200">
        <div className="py-24 px-32">
          <div className="grid grid-cols-2 mb-24">
            <div className="flex flex-col space-y-6">
              <div className="">
                <h3 className="text-4xl font-black capitalize leading-normal">
                  lunch your <br /> own bassness, <br /> with few clicks
                </h3>
              </div>
              <div className="w-96">
                <p className="text-gray-400 text-lg font-normal">
                  Create your powerful apps in minutes without code by <br />{' '}
                  dragging and dropping from our pre-built components like{' '}
                  <br /> Tables, Forms, Actions, Charts, Fields, etc.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="flex items-center justify-center space-x-1 text-lg text-blue-500 hover:text-primary-content font-semibold capitalize"
                >
                  <span className="font-medium">watch now</span>
                  <span>
                    <ChevronRight className="w-5 h-5 feather-chevron-right" />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <img
                src="/landing/Screenshot.png"
                alt="site name"
                className="w-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-12 text-primary-content">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col">
                <img
                  src={feature.src}
                  alt={feature.title}
                  className="w-28 object-cover"
                />
                <h4 className="text-lg font-semibold font-sans-latin-base-en mt-12 mb-8 w-56">
                  {feature.title}
                </h4>
                <p className="w-64 text-gray-400">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mtw-section mtw-landing-section mtw-landing-section__connect">
        <div className="py-24 px-32">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-4xl font-black capitalize leading-normal">
                connect <br /> to any data source
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p>
                Set up your data <strong>in minutes</strong> with a vast array
                of native integrations. Use <strong>REST</strong> for everything
                else.
              </p>
              <div>
                <button type="button" className="btn btn-sm btn-primary">
                  explore integrations
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-56 flex items-center justify-center">
            <h2 className="text-5xl font-black">brand logos goes here</h2>
          </div>
        </div>
      </section>

      <section className="mtw-section mtw-landing-section mtw-landing-section_developers bg-neutral text-base-200">
        <div className="p-24">
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h3 className="text-4xl font-black leading-normal">
                  empowering developers
                </h3>
              </div>
              <div className="max-w-md mt-8 mb-24">
                <p className="text-gray-400 text-center leading-7">
                  We provide a broad range of tools for developers to augment
                  their experience building internal apps. Create SQL queries,
                  POST requests, or use data transformers, all in one place.
                  Consolidate data from different sources for a seamless
                  experience.
                </p>
              </div>
              <div className="grid grid-cols-2 space-x-24">
                <div>
                  <img
                    src="/landing/Screenshot.png"
                    alt="site name"
                    className="w-full object-cover rounded-xl shadow-2xl"
                  />
                </div>
                <div className="flex flex-col space-y-8">
                  {empowering.map((em) => (
                    <div key={em.id} className="flex items-end space-x-8">
                      <div>{em.icon}</div>
                      <div className="flex flex-col space-y-4">
                        <div>
                          <p className="text-lg font-semibold">{em.title}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{em.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mtw-section mtw-landing-section mtw-landing-section_feature-2 p-24">
        <div className="flex flex-col space-y-12">
          <div className="w-full flex items-center justify-center">
            <h3 className="text-4xl font-black leading-normal text-center">
              build your store faster <br />
              for all kind of bassness or teams
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-x-12">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-6">
                <div>
                  <p className="text-lg font-semibold capitalize">
                    admin panel
                  </p>
                  <span className="text-gray-400 capitalize">admin panel</span>
                </div>
                <div>
                  <p className="text-gray-500 font-normal text-lg">
                    Reading and writing your database data: display users to
                    table, change order status and more, with one neatly
                    organized Admin Panel.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center space-x-1 text-primary font-semibold capitalize hover:text-primary-focus"
                  >
                    <span className="font-medium">check this template</span>
                    <span>
                      <ChevronRight className="w-5 h-5 feather-chevron-right" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="divider" />
              <div>
                <div className="flex flex-col space-y-6">
                  {adminList.map((item) => (
                    <div key={item.id} className="flex space-x-2 items-center">
                      <span className="block w-4 h-4">
                        <span className="block w-1.5 h-1.5 bg-primary rounded-full" />
                      </span>
                      <span className="block text-gray-500 text-lg">
                        {item.body}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/landing/Screenshot.png"
                alt="site name"
                className="w-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-12">
            {adminFeature.map((ft) => (
              <div
                key={ft.id}
                className={clsx(
                  'flex items-center justify-between space-x-2 px-5 py-3  rounded-full cursor-pointer group relative',
                  !ft.active &&
                  'bg-base-300 hover:bg-primary hover:text-primary-content',
                  { 'bg-primary text-primary-content space-x-10': ft.active }
                )}
              >
                <span
                  className={clsx(
                    !ft.active &&
                    'text-gray-500 group-hover:text-primary-content',
                    {
                      'absolute p-3 flex items-center justify-center border-2 border-primary text-primary bg-base-100 rounded-full -left-0':
                        ft.active,
                    }
                  )}
                >
                  {ft.icon}
                </span>
                <span className="block text-sm">{ft.title}</span>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              type="button"
              className="flex items-center justify-center space-x-1 font-semibold capitalize hover:text-primary-focus"
            >
              <span className="font-medium">check this template</span>
              <span>
                <ChevronRight className="w-5 h-5 feather-chevron-right" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="mtw-section mtw-landing-section mtw-landing-section_get-started m-24 rounded-xl p-12 bg-gradient-to-tl from-primary to-primary-focus text-primary-content">
        <div className="w-full flex items-center justify-center">
          <h3 className="text-4xl font-black leading-normal text-center">
            Get Started with matjari Today
          </h3>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-lg my-8">
            Turn your ideas into incredible products with a 14-day trial.
          </p>
          <button
            type="button"
            className="flex items-center justify-center rounded bg-base-100 text-primary px-6 py-3 capitalize font-medium"
          >
            try for free
          </button>
          <span className="mt-2 text-base-300">no credit cart required</span>
        </div>
      </section>
      {/* Get Started */}
    </div>
  </Layout>
)

export default IndexPage
