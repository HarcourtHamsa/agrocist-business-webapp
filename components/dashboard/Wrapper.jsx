import React, { Children } from "react";
import styles from "../../styles/sass/wrapper.module.scss";
import Link from "next/link";
// import Image from "next/image";
import {
  BiHomeSmile,
  BiHistory,
  BiLogOut,
  BiCog,
  BiBookContent,
  BiShoppingBag,
  BiGitPullRequest,
  BiWalletAlt,
} from "react-icons/bi";
import { FaHome, FaThList, FaStore, FaDisease, FaHistory, FaWallet, FaCog } from "react-icons/fa";
import SearchBar from "./SearchBar";

function Wrapper({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <aside className={isOpen ? "active" : null}>
        <svg
          onClick={() => setIsOpen(false)}
          id="close"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-1aa9cc10=""
        >
          <circle
            cx="14"
            cy="14"
            r="14"
            fill="#F0F4FD"
            data-v-1aa9cc10=""
          ></circle>{" "}
          <path
            d="M14.0001 12.7626L18.3314 8.4314L19.5686 9.66865L15.2374 13.9999L19.5686 18.3311L18.3314 19.5684L14.0001 15.2371L9.66889 19.5684L8.43164 18.3311L12.7629 13.9999L8.43164 9.66865L9.66889 8.4314L14.0001 12.7626Z"
            fill="#001140"
            data-v-1aa9cc10=""
          ></path>
        </svg>

        <ul>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.label}>
                <Link href={item.href} passHref>
                  <span className="link-container">
                    {item.icon}
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <span id="logout">
          <BiLogOut size={25} />
          logout
        </span>
      </aside>
      <main>
        <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div id="container">{children}</div>
      </main>
    </div>
  );
}

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <FaHome size={20} />,
  },

  {
    label: "Orders",
    href: "/dashboard/orders",
    icon: <FaThList size={20} />,
  },

  {
    label: "Products",
    href: "/dashboard/products",
    icon: <FaStore size={20} />,
  },

  {
    label: "Disease Intelligence",
    href: "/dashboard/products",
    icon: <FaDisease size={20} />,
  },

  {
    label: "Transactions",
    href: "/dashboard",
    icon: <FaHistory size={20} />,
  },
  {
    label: "Wallet",
    href: "/dashboard/wallet",
    icon: <FaWallet size={20} />,
  },

  {
    label: "Settings",
    href: "/dashboard",
    icon: <FaCog size={20} />,
  },
];

export default Wrapper;
