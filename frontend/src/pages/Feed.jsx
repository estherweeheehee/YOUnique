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
import moment from 'moment';


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
                  {moment(para.date).format('DD MMMM YYYY, h:mm:ss a')}
                </a>
              </p>
            </div>
            <div className="flex-shrink-0 self-center flex">
            
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feed;
