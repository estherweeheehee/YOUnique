import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'

const navigation = [
  { name: "Home", to: "/"},
  { name: "Social Media Feed", to: "/feed"},
  { name: "Sell Item", to: "/sell"},
  { name: "Post Update", to: "/post"},
];

const navigation_button = [
  { name: "Login", to: "/login"},
  { name: "Sign up", to: "/signup"},
]

const navigation_login_bar = [
  { name: "My Sales", to: "/mysales"},
  { name: "My Purchase", to: "/mypurchase"},
  { name: "Settings", to: "/setting"},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  const [user, setUser] = useAtom(userAtom);
  let navigate = useNavigate()
  const location = useLocation()

  const handleLogOut = () => {
    fetch(`/api/user/logout`)
        .then((response) => response.json())
        .then((data) => setUser());
    navigate("/login")
  }

  return (
    (
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex px-2 lg:px-0">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://i.imgur.com/s30PMxP.png"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://i.imgur.com/s30PMxP.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {navigation.map((item) => (
                      <Link
                        key={item.name}
                        className={classNames(
                          item.to === location.pathname ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" :
                          "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        )}
                        aria-current={item.to === location.pathname ? "page" : undefined}
                        to={item.to}
                      >
                        {item.name}
                      </Link>
                    ))}                    
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <div className="flex-shrink-0">
                {navigation_button.map((item) => (
                  <Link key={item.name} to={item.to}>
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-2"
                  >
                    <span>{item.name}</span>
                  </button>
                  </Link>
                ))}   
                </div>
  
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-4 relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="lg:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Dashboard
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Team
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Calendar
                </Disclosure.Button>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">Tom Cook</div>
                    <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
    // <div className="nav">

    //   <Link to="/">Home</Link>
    //   <Link to="/sell">Sell Item</Link>
    //   <Link to="/feed">Feed</Link>
    //   <Link to="/post">Post/Update</Link>

    //   {user?.["username"] !== undefined ? (
    //     <>
    //       <Link to="/mysales">My Sales</Link>
    //       <Link to="/mypurchase">My Purchase</Link>
    //       <Link to="/settings">Settings</Link>
    //     </>
    //   ) : null}

    //   {user?.["username"] !== undefined ? (
    //     <button onClick={handleLogOut}>Log Out</button>
        
    //   ) : (
    //     <Link to="/login">Sign up/ Login</Link>
    //   )}
    // </div>
  );
}

export default NavBar;
