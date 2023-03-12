export default async function Home() {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 2xl:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                Hashiru Pro
              </span>
            </div>
          </div>
          <div className="text-gray-500">
            Switch your subscription to a different type, such as a monthly
            plan, annual plan, or student plan. And see a list of subscription
            plans that hashiru Pro offers.{" "}
          </div>
          <div className="mt-4 text-sm font-bold text-black">
            Next payment of $99 (monthly) occurs on Mar 15, 2023.
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 sm:w-auto"
            >
              Change Plan
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center bg-white border rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-red-200 sm:w-auto"
            >
              Cancel Subscription
            </button>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Billing History
              </h3>
              <span className="text-base font-normal text-gray-500">
                This is a list of latest invoices
              </span>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#"
                className="p-2 text-sm font-medium text-red-600 rounded-lg hover:bg-gray-100"
              >
                View all
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="overflow-x-auto rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Transaction
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Date &amp; Time
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                          Hashiru Pro (15/3/2023-14/4/2023)
                        </td>
                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                          Mar 15, 2021
                        </td>
                        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                          $99
                        </td>
                        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                          Pending
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 text-sm font-normal text-gray-900 rounded-lg whitespace-nowrap rounded-left">
                          Hashiru Pro (13/2/2023-15/3/2023)
                        </td>
                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                          Feb 13, 2021
                        </td>
                        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                          $99
                        </td>
                        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                          Paid
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                          Hashiru Pro (14/1/2023-13/2/2023)
                        </td>
                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                          Jan 14, 2021
                        </td>
                        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                          $99
                        </td>
                        <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                          Paid
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 my-4 2xl:grid-cols-2 xl:gap-4">
        <form
          className="flex flex-col h-full gap-4 p-4 mb-4 bg-white rounded-lg shadow sm:p-6"
          method="POST"
          action="/api/debug"
        >
          <div className="flex items-center justify-between ">
            <h3 className="text-xl font-bold leading-none text-gray-900">
              Profile
            </h3>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col w-full gap-2">
              <div className="w-full">
                <label htmlFor="first_name" className="font-semibold">
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  placeholder="John"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="last_name" className="font-semibold">
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  placeholder="john@johndoe.com"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="country" className="font-semibold">
                  Country/Region
                </label>
                <select
                  id="country"
                  name="country"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  defaultValue="HK"
                >
                  {(
                    await fetch("https://restcountries.com/v3.1/all").then(
                      (x) => x.json()
                    )
                  ).map((x: any) => (
                    <option key={x.ccn3} value={x.cca2}>
                      {x.flag} {x.name.official}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="w-full">
                <label htmlFor="school" className="font-semibold">
                  School
                </label>
                <input
                  id="school"
                  name="school"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm overflow-ellipsis"
                  placeholder="HKUST"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="major" className="font-semibold">
                  Major
                </label>
                <input
                  id="major"
                  name="major"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  placeholder="Bachelor in Business Administration"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="w-full h-full">
                <label htmlFor="bio" className="font-semibold">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  className="block w-full h-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  placeholder="Something about yourself."
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 sm:w-auto"
            >
              Update
            </button>
          </div>
        </form>
        <form
          className="flex flex-col h-full gap-4 p-4 mb-4 bg-white rounded-lg shadow sm:p-6"
          method="POST"
          action="/api/debug"
        >
          <div className="flex items-center justify-between ">
            <h3 className="text-xl font-bold leading-none text-gray-900">
              Tenant Info
            </h3>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col w-full gap-2">
              <div className="w-full">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  placeholder="HKUST"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="domain" className="font-semibold">
                  Custom Domain
                </label>
                <input
                  id="domain"
                  name="domain"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  placeholder="hack.hkust.edu.hk"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="font-semibold">
                  Support Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  placeholder="support@hack.hkust.edu.hk"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="w-full">
                <label htmlFor="website" className="font-semibold">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm overflow-ellipsis"
                  placeholder="https://hkust.edu.hk"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="favicon" className="font-semibold">
                  Favicon
                </label>
                <input
                  id="favicon"
                  name="favicon"
                  type="file"
                  className="block w-full p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm"
                  placeholder="Bachelor in Business Administration"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 sm:w-auto"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
