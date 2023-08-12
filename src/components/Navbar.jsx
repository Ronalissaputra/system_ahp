import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [ismenuOpen, setIsmenuOpen] = useState(false);
  const [isprofilOpen, setIsprofilOpen] = useState(false);
  return (
    <nav className="top-0 sticky bg-white">
      <div className="px-2 sm:px-6 lg:px-40">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsmenuOpen(!ismenuOpen)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <p className="lg:text-3xl text-xl font-bold text-black">AHP</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm"
                      : "text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/kriteria"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm"
                      : "text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Kriteria
                </NavLink>
                <NavLink
                  to="/alternatif"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm"
                      : "text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Alternatif
                </NavLink>
                <NavLink
                  to="/perbandingankriteria"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm"
                      : "text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Perbandingan Kriteria
                </NavLink>
                <NavLink
                  to="/perbandinganalternatif"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm"
                      : "text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Perbandingan Alternatif
                </NavLink>
                <NavLink
                  to="/ranking"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm"
                      : "text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  Ranking
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <button
                onClick={() => setIsprofilOpen(!isprofilOpen)}
                className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center"
              >
                <p className="text-white">R</p>
              </button>

              <div
                className={`absolute ${
                  isprofilOpen ? "" : "hidden"
                } right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div
          className={`space-y-1 px-2 pb-3 pt-2 ${
            ismenuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                : "text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/kriteria"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                : "text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            }
          >
            Kriteria
          </NavLink>
          <NavLink
            to="/alternatif"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                : "text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            }
          >
            Alternatif
          </NavLink>
          <NavLink
            to="/perbandingankriteria"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                : "text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            }
          >
            Perbandingan Kriteria
          </NavLink>
          <NavLink
            to="/perbandinganalternatif"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                : "text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            }
          >
            Perbandingan Alternatif
          </NavLink>
          <NavLink
            to="/ranking"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                : "text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            }
          >
            Ranking
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
