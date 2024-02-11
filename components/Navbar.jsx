"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 bg-white w-full">
      <header className="my-5 max-w-[1440px] w-full px-10">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={150}
              height={50}
              className="object-contain max-sm:w-[100px]"
            />
          </Link>

          {/* Desktop Menu */}

          <menu className="bg-color-gradient rounded-full shadow-3xl hidden lg:block">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href} className="navLink">
                {link.label}
              </Link>
            ))}
          </menu>

          {/* Mobile Menu */}
          <div className="flex lg:hidden relative justify-between items-center">
            <Image
              src={toggle ? "/assets/icons/close.svg" : "assets/icons/menu.svg"}
              width={25}
              height={25}
              alt="nav-icon"
              onClick={() => setToggle(!toggle)}
              className="object-contain cursor-pointer"
            />

            <menu
              className={`${toggle ? "flex" : "hidden"} 
            flex-col text-center absolute right-0 top-8 min-w-32 mobile-nav-gradient p-5 rounded-2xl`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="navLink__mobile"
                >
                  {link.label}
                </Link>
              ))}
            </menu>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
