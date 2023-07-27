"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="main-container my-5 flex items-center justify-between relative">
          <Link href="/">
            <Image
              src="/logo-dark-sm.png"
              alt="Thrill Tourism logo"
              width={36}
              height={36}
            />
          </Link>
          <Link
            href="add-new"
            className="ms-auto px-6 py-2 bg-slate-700 text-white rounded"
          >
            Add a place
          </Link>
          <ul
            className={`bg-gray-200 rounded-lg p-5 absolute top-0 transition-all duration-[1s] leading-relaxed ${
              isOpen ? "translate-x-0 w-full" : "-translate-x-36 w-32"
            }`}
          >
            <li>
              <Link
                href="/"
                className="hover:bg-gray-300 py-1 hover:translate-x-1 ps-3 transition -translate-x-3  duration-300 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="places"
                className="hover:bg-gray-300 py-1 hover:translate-x-1 ps-3 transition -translate-x-3  duration-300 block"
              >
                Places
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gray-300 py-1 hover:translate-x-1 ps-3 transition -translate-x-3  duration-300 block"
                href="/"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-gray-300 py-1 hover:translate-x-1 ps-3 transition -translate-x-3  duration-300 block"
                href="contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* hamburger icon */}
          <Hamburger isOpen={[isOpen, setIsOpen]} />
        </nav>
      </header>
    </>
  );
}
