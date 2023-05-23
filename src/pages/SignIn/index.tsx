import React from 'react'

const SignIn = () => {
  return (
    <div className="min-height-form flex flex-col justify-center">
      <div
        className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden"
      >
        <div className="relative hidden xl:block xl:w-1/2 h-full">
          <img
            className="absolute h-auto w-full object-cover"
            src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
            alt="my zomato"
          />
        </div>
        <div className="w-full xl:w-1/2 p-8">
          <form onSubmit={() => false}>
            <h1 className=" text-2xl font-bold">Sign in to your account</h1>
            <div>
              <span className="text-gray-600 text-sm">
                Don't have an account?
              </span>
              <span className="text-gray-700 text-sm font-semibold">
                Sign up
              </span>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="flex text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-6 mt-6">
              <label
                className="flex text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Your password"
              />
              <a
                className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
                href="/forgot"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex w-full mt-8">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
