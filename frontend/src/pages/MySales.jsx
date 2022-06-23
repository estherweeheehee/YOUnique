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
        <div className="mysales">
          <h1> my sales</h1>

          <div className="hidden sm:block">
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

        {view === "single" ? <SingleOrder /> : <SubscriptionOrder />}
      </>
    );
  }
};

export default MySales;
