import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, Fragment, useState } from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import classnames from 'classnames';

import Nav from '../../Nav'

import './header.module.css'

export default function Header(props) {
  const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(true)

  const isMobile = false;

  useEffect(() => {
    showSidebar && setShowSidebar(!showSidebar)
  }, [router.asPath])

  return (
    <header
      id='header'
      className={classnames([
        'header',
         isMobile ? "flex justify-end items-center" : "relative flex justify-center place-items-center"
      ])}>
      <Nav />
      
      {/* {isMobile ? null : (
        <div className="absolute right-0 flex justify-center place-items-center">
          <div className="header-icon-wrapper">
            <FaFacebookF className={classnames('icon')} />
          </div>
          <div className="header-icon-wrapper">
            <BsTwitter className={classnames('icon')} />
          </div>
          <div className="header-icon-wrapper">
            <AiOutlineInstagram className={classnames('icon')} />
          </div>
        </div>
      )} */}
    </header>
  )
}
