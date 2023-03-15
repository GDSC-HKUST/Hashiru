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
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
              Forgot your password?
            </h2>
            <p className="text-gray-500">
              Type in your email and we will send you a code to reset your
              password.
            </p>
          </div>
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
            <Link
              href="/dashboard"
              className="inline-block w-full px-5 py-3 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 sm:w-auto"
            >
              Reset Password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
