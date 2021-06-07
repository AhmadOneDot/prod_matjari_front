export const RegisterPage = (): JSX.Element => (
  <div className="w-full flex h-screen min-h-screen">
    <div className="w-1/2 flex items-center justify-center">
      <div className="max-w-sm flex flex-col items-center justify-center space-y-6 text-gray-500">
        <div>
          <h1 className="text-3xl text-primary">logo goes here</h1>
        </div>
        <div>
          <p className="text-4xl font-semibold capitalize text-neutral">
            get Started <span className="text-primary">free tody</span>
          </p>
        </div>
        <div>
          <p className="leading-6 text-sm font-semibold text-center">
            No card required. You&#39;ll get to test all the advanced
            functionality for free during the 14 day PRO trial.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex space-x-6 justify-center">
            <button
              type="button"
              className="btn btn-sm btn-outline w-48 space-x-2 border-base-300 hover:bg-transparent hover:text-gray-800"
            >
              <img
                src="/auth/facebook2.png"
                alt="site name"
                className="w-5 h-5"
              />
              <span className="font-semibold">facebook</span>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline w-48 space-x-2 border-base-300  hover:bg-transparent hover:text-gray-800"
            >
              <img src="/auth/google.png" alt="site name" className="w-5 h-5" />
              <span className="font-semibold">google</span>
            </button>
          </div>
          <div className="divider mt-8 mb-2">OR</div>
        </div>
        <div>
          <form className="flex flex-col space-y-6">
            <div className="form-control">
              <input
                type="text"
                placeholder="enter your full name"
                className="input input-bordered w-96"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="enter your full email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="your store name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="your store domain"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="your secure password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="confirm password"
                className="input input-bordered"
              />
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-block">register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      className="w-1/2 bg-cover bg-center flex  flex-col items-center justify-center"
      style={{ backgroundImage: 'url(/auth/background-auth.png)' }}
    >
      <div>
        <img
          src="/auth/interface-top@2x.png"
          alt="site title"
          className="object-cover max-w-md"
        />
      </div>
      <div>
        <img
          src="/auth/interface-middle@2x.png"
          alt="site name"
          className="object-cover max-w-lg -mt-28"
        />
      </div>
      <div>
        <img
          src="/auth/interface-bottom@2x.png"
          alt="site name"
          className="object-cover max-w-lg -mt-24 ml-16"
        />
      </div>
    </div>
  </div>
)

export default RegisterPage
