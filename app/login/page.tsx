import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 bg-gray-50">
      <a
        href="/"
        className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10"
      >
        <span className="self-center text-2xl font-bold text-black whitespace-nowrap">
          Hashiru
        </span>
      </a>
      {/* Card */}
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-screen-sm xl:p-0">
        <div className="p-6 space-y-8 sm:p-8 lg:p-16">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            Platform Login
          </h2>
          <form className="mt-8 space-y-6" action="/api/login" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                // placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-200"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-900">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-red-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <Link
              href="/dashboard"
              className="inline-block w-full px-5 py-3 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 sm:w-auto"
            >
              Login
            </Link>
            <div className="text-sm font-medium text-gray-500">
              Not registered?{" "}
              <a href="/register" className="text-red-500 hover:underline">
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
