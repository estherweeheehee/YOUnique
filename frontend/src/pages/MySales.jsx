import { useAtom } from "jotai";
import { userAtom } from "../App";
import { useNavigate } from "react-router-dom";
import { useState, Fragment } from "react";
import SingleOrder from "../components/SingleOrder";
import SubscriptionOrder from "../components/SubscriptionOrder";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";

const tabs = [
  { name: "View Single Orders", href: "#", current: "single" },
  { name: "View Subscription Orders", href: "#", current: "subscription" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MySales = () => {
  const [user, setUser] = useAtom(userAtom);

  let navigate = useNavigate();

  if (user?.username === undefined) {
    navigate("/login");
    return;
  } else {
    const [view, setView] = useState("single");
    const handleView = () => {
      if (view === "single") {
        setView("subscription");
      } else {
        setView("single");
      }
    };

    return (
      <>
        <main className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">My Sales</h1>
          <p className="mt-2 text-sm text-gray-500">
            View and manage the status of your sales
           
          </p>
          <div className="hidden sm:block mx-auto">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  onClick={handleView}
                  className={classNames(
                    tab.current === view
                      ? "bg-indigo-100 text-gray-700"
                      : "text-gray-500 hover:text-gray-700",
                    "px-3 py-2 font-medium text-sm rounded-md"
                  )}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 space-y-16 sm:mt-16">
        {view === "single" ? <SingleOrder /> : <SubscriptionOrder />}
          
        </div>
      </main>

          
       

        
      </>
    );
  }
};

export default MySales;
