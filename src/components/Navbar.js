import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import linkedin from "../assets/logos/linkedin.svg";
import instagram from "../assets/logos/instagram.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-custom-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* Use Link to navigate to the home page */}
              <Link to="/" className="text-white text-lg font-semibold">
                Jayesh Suntha
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/infibat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Instagram Profile"
                  src={instagram}
                  className="h-8 w-auto"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jayesh-suntha-827481221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="LinkedIn Profile"
                  src={linkedin}
                  className="h-8 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Mobile menu items, if needed */}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
