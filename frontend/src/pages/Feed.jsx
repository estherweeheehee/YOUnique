import React, { useEffect } from "react";
import { useState } from "react";
import ImgAndDesc from "../components/ImgAndDesc";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
  StarIcon,
} from "@heroicons/react/solid";
import UserFeedComponents from "../components/UserNameFeedComponents";
import UserImageFeedComponent from "../components/UserImageFeedComponent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Feed() {
  const [userFeed, setUserFeed] = useState([]);
  useEffect(() => {
    fetch(`/api/feed`)
      .then((response) => response.json())
      .then((data) => setUserFeed(data));
  }, []);

  return (
    <div className="bg-white px-4 py-5 sm:px-6">
      {userFeed.map((para) => {
        return (
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <UserImageFeedComponent para={para.userid} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">
                <Link to={"/user/" + para.userid} className="hover:underline">
                  <UserFeedComponents para={para.userid} />
                </Link>
              </p>
              <p className="text-md text-black">{para.post}</p>
              <img src={para.Image_url} alt="" className="h-25 w-" />
              <p className="text-sm text-gray-500">
                <a href="#" className="hover:underline">
                  {para.date}
                </a>
              </p>
            </div>
            <div className="flex-shrink-0 self-center flex">
              {/* <Menu as="div" className="relative z-30 inline-block text-left">
                <div>
                  <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
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
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <StarIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Add to favorites</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <CodeIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Embed</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <FlagIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Report content</span>
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feed;
