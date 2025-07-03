"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="">
      <div className="fixed border-r border-black/20 lg:w-[30%] xl:w-[20%] h-screen bg-[#776bff] lg:flex flex-col justify-between p-6 hidden">
        <div className="font-crispy text-5xl ">
          <Link
            href={`/`}
            className="border-b-3 w-fit pb-[8px] border-red-500 text-white "
          >
            FORDY .
          </Link>
        </div>
        <div className="flex flex-col gap-2 uppercase tracking-widest">
          <Link
            href={`/`}
            className="font-crispy flex group gap-x-2 items-center hover:translate-x-2 transition-all duration-300 ease-in-out"
          >
            <svg x="0" y="0" viewBox="0 0 24 24" className="size-7 fill-white">
              <g>
                <path
                  fillRule="evenodd"
                  d="M13.819 4.666a2.815 2.815 0 0 0-3.638 0L4.795 9.12C4.305 9.526 4 10.167 4 10.866v6.945C4 19.078 4.952 20 6 20h2v-3.252c0-2.255 1.734-4.19 4-4.19s4 1.935 4 4.19V20h2c1.048 0 2-.922 2-2.19v-6.944c0-.699-.304-1.34-.795-1.746zm1.274-1.541 5.386 4.453c.97.803 1.521 2.019 1.521 3.288v6.945C22 20.066 20.266 22 18 22h-2a2 2 0 0 1-2-2v-3.252c0-1.268-.952-2.19-2-2.19s-2 .922-2 2.19V20a2 2 0 0 1-2 2H6c-2.266 0-4-1.934-4-4.19v-6.944c0-1.269.55-2.485 1.521-3.288l5.386-4.453a4.814 4.814 0 0 1 6.186 0z"
                  clipRule="evenodd"
                  opacity="1"
                ></path>
              </g>
            </svg>
            <p>Home</p>
            <p className="group-hover:flex hidden text-red-500">.</p>
          </Link>
          <Link
            href={`/about`}
            className="font-crispy flex group gap-x-2 items-center hover:translate-x-2 transition-all duration-300 ease-in-out"
          >
            <svg viewBox="0 0 32 32" className="size-7 fill-white">
              <g>
                <path d="M16.255 2c-3.863 0-7 3.137-7 7s3.137 7 7 7 7-3.137 7-7-3.137-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zM4.255 28h12a1 1 0 0 1 0 2h-13a1 1 0 0 1-1-1v-2a9 9 0 0 1 9-9H16a1 1 0 0 1 0 2h-4.745a7 7 0 0 0-7 7zM25 18.292c-3.311 0-6 2.688-6 6 0 3.311 2.689 6 6 6s6-2.689 6-6c0-3.312-2.689-6-6-6zm0 2c2.208 0 4 1.792 4 4 0 2.207-1.792 4-4 4s-4-1.793-4-4c0-2.208 1.792-4 4-4z"></path>
                <path d="M26 26.507v-2.042a1 1 0 0 0-2 0v2.042a1 1 0 0 0 2 0z"></path>
                <circle
                  cx="25"
                  cy="22.206"
                  r="1"
                  fill="#ffffff"
                  opacity="1"
                ></circle>
              </g>
            </svg>
            <p>About</p>
            <p className="group-hover:flex hidden text-red-500">.</p>
          </Link>
          <Link
            href={`/projects`}
            className="font-crispy flex group gap-x-2 items-center hover:translate-x-2 transition-all duration-300 ease-in-out"
          >
            <svg viewBox="0 0 511 511.998" className="size-7 fill-white">
              <g>
                <path
                  d="M501.426 238.11 419.203 197l82.223-41.113c14.707-7.352 14.722-28.414 0-35.778l-236-118a20.022 20.022 0 0 0-17.89 0l-236 118c-14.708 7.356-14.723 28.418 0 35.778L93.757 197l-82.223 41.11c-14.707 7.355-14.722 28.413 0 35.777L93.758 315l-82.223 41.11c-14.707 7.355-14.722 28.413 0 35.777l236 118a20.01 20.01 0 0 0 17.89 0l236-118c14.708-7.356 14.723-28.414 0-35.778L419.204 315l82.223-41.113c14.707-7.352 14.722-28.414 0-35.778zM256.48 42.36 447.758 138 256.48 233.637 65.203 138zM447.758 374 256.48 469.637 65.203 374l73.277-36.64 109.055 54.527a20.01 20.01 0 0 0 17.89 0l109.055-54.528zM256.48 351.637 65.203 256l73.277-36.64 109.055 54.527a20.01 20.01 0 0 0 17.89 0l109.055-54.528L447.758 256zm0 0"
                  fill="#fff"
                  opacity="1"
                ></path>
              </g>
            </svg>
            <p>Projects</p>
            <p className="group-hover:flex hidden text-red-500">.</p>
          </Link>
        </div>
        <div className="capitalize text-gray-200 tracking-wide text-sm">
          <p>@2025 clifford jay iyac</p>
        </div>
      </div>
      <div className="fixed p-4 w-full flex justify-end z-[1000] h-fit bg-[#776bff] shadow lg:hidden">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-8 cursor-pointer"
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={`fixed inset-0 h-full bg-white z-[1001] text-black flex lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      >
        <svg
          className="size-8 absolute top-4 right-4 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="w-full flex-col gap-y-6 flex items-center font-crispy text-xl justify-center transition-opacity duration-500 delay-100">
          <Link href="/" className="hover:text-gray-700" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-700"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-700"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
