import { WebLayout as Layout } from '../layouts/web/webLayout'

const IndexPage = (): React.ReactElement => (
  <Layout>
    <div className="mtw-page mtw-landing-page">
      <section className="mtw-section mtw-landing-section mtw-landing-section__banner relative">
        <div className="w-full flex items-center">
          <div className="w-1/2 flex flex-col space-y-4 pl-24">
            <div className="max-w-md">
              <h3 className="text-4xl font-black capitalize leading-normal">lunch your own bassness, with few clicks</h3>
            </div>
            <div className="max-w-md">
              <p className="text-lg font-normal text-gray-400 leading-9">
                Build apps for your teams without engineering effort. Start your free 14-day trial</p>
            </div>
          </div>
          <div className="w-1/2 relative h-screen">
            <img
              src="/landing/banner_bg.svg"
              alt="site title"
              className="object-cover absolute bottom-0 right-0"
            />
          </div>
        </div>
      </section>
      {/* Banner */}
    </div>
  </Layout>
)

export default IndexPage
