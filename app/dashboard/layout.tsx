"use client";

import {
  AdjustmentsHorizontalIcon,
  ArrowRightOnRectangleIcon,
  ChartPieIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  TableCellsIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Suspense, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const user = { name: "John Doe" };

  return (
    <div className="flex flex-col w-full h-screen max-h-screen">
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                id="toggleSidebarMobile"
                className="p-2 mr-2 text-gray-600 rounded cursor-pointer bg-inherit lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
                onClick={() => setIsExpanded((x) => !x)}
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <a
                href="/"
                className="text-black hover:no-underline text-xl font-bold flex items-center lg:ml-2.5 lg:w-64"
              >
                <span className="self-center whitespace-nowrap">Hashiru</span>
              </a>
              <form action="#" method="GET" className="hidden lg:block">
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 lg:w-64">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="p-2 mr-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100"
              >
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>
              <div className="items-center hidden lg:flex">
                <span className="mr-5 text-base font-normal text-gray-500">
                  Welcome, {user.name}!
                </span>
              </div>
              <Link
                href="/"
                className="hidden sm:inline-flex text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm py-2.5 px-3.5 text-center items-center mr-3"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex pt-16 overflow-hidden bg-white">
        <aside
          id="sidebar"
          className={
            "fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 duration-75 lg:flex transition-width" +
            (isExpanded ? "" : " hidden")
          }
        >
          <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 space-y-1 bg-white divide-y">
                <ul className="pb-2 space-y-2">
                  <li>
                    <form action="#" method="GET" className="lg:hidden">
                      <label htmlFor="mobile-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="mobile-search"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-600 focus:ring-red-600 block w-full pl-10 p-2.5"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
                    >
                      <ChartPieIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      <span className="ml-3">Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/hackathons"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
                    >
                      <Squares2X2Icon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        [WIP] Hackathons
                      </span>
                      {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
                        Pro
                      </span> */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/applications"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
                    >
                      <InboxArrowDownIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        [WIP] Applications
                      </span>
                      {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
                        Pro
                      </span> */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/judgements"
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
                    >
                      <TableCellsIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        [WIP] Judgements
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/users"
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
                    >
                      <UserIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Users
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/tickets"
                      className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                    >
                      <LifebuoyIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      <span className="ml-3">[WIP] Support Tickets</span>
                    </Link>
                  </li>
                </ul>
                <ul className="pt-2 space-y-2">
                  <li>
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                    >
                      <AdjustmentsHorizontalIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      <span className="ml-3">Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/logout"
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
                    >
                      <ArrowRightOnRectangleIcon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        [WIP] Logout
                      </span>
                    </Link>
                  </li>
                  <li>
                    <select className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 bg-white rounded-lg hover:bg-gray-100 group">
                      {/* <svg
                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg> */}
                      <option className="ml-3" disabled>
                        Select Tenant
                      </option>
                      <option className="ml-3">HKUST</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div
          className="fixed inset-0 z-10 hidden bg-gray-900 opacity-50"
          id="sidebarBackdrop"
        />
        <div
          id="main-content"
          className="relative w-full min-h-screen overflow-y-auto bg-gray-50 lg:ml-64"
        >
          <main>
            <div className="px-4 pt-6">
              <Suspense>{children}</Suspense>
            </div>
          </main>
          <footer className="p-4 mx-4 my-6 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8">
            <ul className="flex flex-wrap items-center mb-6 md:mb-0">
              <li>
                <a
                  href="#"
                  className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6"
                >
                  Licensing
                </a>
              </li>
            </ul>
            <div className="flex space-x-6 sm:justify-center">
              <a
                href="https://github.com/GDSC-HKUST/Hashiru"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </footer>
          <p className="my-10 text-sm text-center text-gray-500">
            © 2023 <Link href="/">Hashiru</Link>. All rights reserved. Built
            with{" "}
            <a href="https://nextjs.org" className="text-red-600">
              Next.js 13
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com" className="text-red-600">
              Tailwind CSS
            </a>
            . Dashboard Reference:{" "}
            <a
              href="https://github.com/themesberg/tailwind-dashboard-windster"
              className="text-red-600"
            >
              Windster
            </a>{" "}
            by{" "}
            <a href="https://themesberg.com/" className="text-red-600">
              Themesberg
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
