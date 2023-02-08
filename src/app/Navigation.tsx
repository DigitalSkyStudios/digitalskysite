"use client"
import Link from "next/link";
import { useState } from "react";
import classnames from "classnames";

const Navigation = () => {
    const [navOpen, setNavOpen] = useState<any>(false);
    return (
      <nav className={classnames({
        'fixed flex flex-wrap justify-between items-stretch bg-dark w-full text-white z-50 md:items-center': true,
        'px-5 py-3': true,
      })}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo.png" alt="logo" className="w-16"/>
             
        <button
          className="md:hidden block absolute top-[35%] right-5 z-50 burger"
          onClick={() => { setNavOpen((e: boolean) => !e) }}
          >
          <div className={classnames({
            'h-[2px] w-8 mb-2 bg-white rounded': true,
            'origin-center translate-y-2.5 rotate-45': navOpen,
          })} />
          <div className={classnames({
            'h-[2px] opacity-1 w-8 mb-2 bg-white rounded': true,
            'opacity-0': navOpen,
          })} />
          <div className={classnames({
            'h-[2px] w-8 mb-2 bg-white rounded': true,
            'origin-center -translate-y-2.5 -rotate-45':navOpen,
          })} />
        </button>
        <ul id="navitems" className={classnames(
          {
            'flex flex-col md:flex-row md:bg-dark bg-darkAccent z-30 md:justify-end justify-center': true,
            'md:h-full text-center md:translate-x-0 md:w-content md:static': true,
            'absolute right-0 w-[70vw] h-screen mt-[-10px]': navOpen,
            'absolute h-screen w-[70vw] right-0 translate-x-full': !navOpen
          }
        )}>
            <li className="mx-10 py-2 my-4 md:my-0 navHover">
              <Link href="/">
              Home
              </Link>
            </li>
            <li className="mx-10 py-2 my-4 md:my-0 navHover">
              <Link href="/blogs">
              Blog
              </Link>
              </li>
            <li className="mx-10 py-2 my-4 md:my-0 navHover">
              <Link href="/team">
              Team
              </Link>
            </li>
            <li className="mx-10 py-2 my-4 md:my-0 navHover">
              <Link href="/games">
              Games
              </Link>
              </li>
              <Link href="/contact">
            <li className="mx-10 px-5 py-2 box-border my-4 md:my-0 btn">
              Let&apos;s Talk
              </li>
              </Link>
          </ul>
        </nav>
    )
}

export default Navigation;