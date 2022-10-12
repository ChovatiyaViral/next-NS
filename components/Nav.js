import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsList, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import classnames from "classnames";
import { IconName, BsJustifyRight } from "react-icons/bs";
// import DrawerComponent from './drawer';
import styles from "./nav.module.css";
// import Hamburger from "hamburger-react";
import React, { useState } from "react";
import axios from "axios";

function Nav() {

  const [headerMenu, setHeaderMenu] = React.useState([]);
  let isMobile = false;
  // console.log(isMobile)

  React.useEffect(() => {
    getMenus()
  }, [])


  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  };

  const getMenus = async () => {
    const response = await axios({
      method: "GET",
      url: "https://isg-cms.stageoakum.in/master-template"
    }).catch(err => {
      console.log("err", err);
    });
    if (response && response.status === 200) {
      setHeaderMenu(response?.data);
    } else {
      console.log("err", response?.error);
    }
  }
  return (
    <>
      <div className="absolute left-0 block sm:hidden">
        <button onClick={() => handleToggleMenu()}>
          <BsList className={styles.hamburge_menu} />
        </button>
      </div>
      <div className={classnames(['block sm:hidden', styles.logo, styles.mobileLogo])}>
        <img src={headerMenu?.logo?.url} alt="Logo" width={184} height={36} />
      </div>
      <div
        className={classnames(
          ["flex flex-1 items-center justify-center ",
            styles.menu_bar,
            isOpen ? "" : styles.menu_bar_open
          ]
        )}
      >
        {
          headerMenu && headerMenu.header_menu && headerMenu.header_menu.length > 0 ?

            headerMenu.header_menu.map((menu, index) => {
              return (
                <Link href={menu?.link} key={index}>
                  <a className={"link"}>{menu?.title}</a>
                </Link>
              )
            })
            : null
        }
        <div className="absolute right-0 flex justify-center place-items-center header-icons">
          {
            headerMenu.header_social_media_links && headerMenu.header_social_media_links.length > 0 ?
              headerMenu?.header_social_media_links.map((item, index) => {
                return (
                  <div className="header-icon-wrapper" key={index}>
                    <a href={item?.link} target="block">
                      <img src={item?.image?.url} alt="social media icon" width={item?.image?.name === "facebook.png" ? 10 : 17} height={17} className={classnames("icon cursor-pointer")} />
                    </a>
                  </div>
                )
              })
              : null
          }
        </div>

      </div>
    </>
  );
}

export default Nav;
