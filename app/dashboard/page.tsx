export default function Home() {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                2,340
              </span>
              <h3 className="text-base font-normal text-gray-500">
                New applications this week
              </h3>
            </div>
            <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-green-500">
              14.6%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                5,355
              </span>
              <h3 className="text-base font-normal text-gray-500">
                User signups this week
              </h3>
            </div>
            <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-green-500">
              32.9%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                3
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Active hackathons this week
              </h3>
            </div>
            <div className="flex items-center justify-end flex-1 w-0 ml-5 text-base font-bold text-red-500">
              -2.7%
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 my-4 2xl:grid-cols-2 xl:gap-4">
        <div className="h-full p-4 mb-4 bg-white rounded-lg shadow sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900">
              Latest Users
            </h3>
            <a
              href="#"
              className="inline-flex items-center p-2 text-sm font-medium text-red-600 rounded-lg hover:bg-gray-100"
            >
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      email@hashiru.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {new Date().toString()}
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Bonnie Green
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      email@hashiru.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {new Date().toString()}
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Michael Gough
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      email@hashiru.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {new Date().toString()}
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Thomes Lean
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      email@hashiru.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {new Date().toString()}
                  </div>
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Lana Byrd
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      email@hashiru.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {new Date().toString()}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 ">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Latest Applications
              </h3>
              <span className="text-base font-normal text-gray-500">
                List of latest applications
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
                          Application Title
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Submitted At
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Hackathon
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {[
                        { name: "Go Green!" },
                        { name: "Carbon Zero" },
                        { name: "Intelligent Store System" },
                        { name: "I am out of name ideas" },
                      ].map((x) => (
                        <tr key={x.name}>
                          <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                            {x.name}
                          </td>
                          <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                            {new Date().toLocaleString()}
                          </td>
                          <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                            hackUST 2023
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
