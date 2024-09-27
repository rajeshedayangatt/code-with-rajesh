"use client";
import React, { useEffect, useState } from "react";

import { ThemeToggle } from "./ThemeToggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 200);
  }, [pathname, progress]);
  useEffect(() => {
    setProgress(0);
  }, []);

  return (
    <header className="flex w-full items-center justify-between bg-white py-10 dark:bg-gray-950 sticky top-0 backdrop-blur z-10">
      <a className="break-words" aria-label="Abdul Rauf's Blog" href="/">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <svg
              width="200"
              height="74.53634640155877"
              viewBox="0 0 389.7027027027027 77.98903380929607"
              className="looka-1j8o68f"
            >
              <defs id="SvgjsDefs1226">
                <linearGradient id="SvgjsLinearGradient1231">
                  <stop
                    id="SvgjsStop1232"
                    stopColor="#00ff8f"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop1233"
                    stopColor="#00a1ff"
                    offset="1"
                  ></stop>
                </linearGradient>
                <linearGradient id="SvgjsLinearGradient1234">
                  <stop
                    id="SvgjsStop1235"
                    stopColor="#00ff8f"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop1236"
                    stopColor="#00a1ff"
                    offset="1"
                  ></stop>
                </linearGradient>
              </defs>
              <g
                id="SvgjsG1227"
                data-featurekey="2ou6gm-0"
                transform="matrix(0.9060785452572715,0,0,0.9060785452572715,13.748057951314443,19.093921454742727)"
                fill="url(#SvgjsLinearGradient1231)"
              >
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.3,8.3C17.5,9,10,26.7,19.9,37.8c2.7,3,4.2,7,4.1,11.1c0,0.2,0,0.3,0,0.4c0,0.2,0.1,0.3,0.2,0.4c-0.4,0.6-0.6,1.2-0.6,2   c0,1.7,1.1,3,2.7,3.4c-0.3,0.5-0.4,1.1-0.4,1.7c0,1.7,1.2,3.1,2.8,3.5v0.2c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5v-0.2   c1.6-0.3,2.8-1.8,2.8-3.5c0-0.6-0.2-1.2-0.4-1.7c1.5-0.4,2.7-1.8,2.7-3.4c0-0.8-0.3-1.6-0.8-2.2c0-0.1,0.1-0.1,0.1-0.2   c0-0.1,0-0.2,0-0.4c-0.1-4.1,1.4-7.9,4.3-11.2C56.5,26,47.9,7.6,32.3,8.3z M35.8,60.5c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5v-0.1   h5V60.5z M37,58.4c-1.5,0-5.1,0-7.6,0c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6H37c0.9,0,1.6,0.7,1.6,1.6S37.9,58.4,37,58.4z    M39.3,53.3c-0.2,0-12.8,0-12,0c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6h12c0.9,0,1.6,0.7,1.6,1.6S40.1,53.3,39.3,53.3z M32.6,48.2   l-2-7.1h5.3l-2,7.1H32.6z M44.9,36.4c-3,3.5-4.6,7.5-4.8,11.8h-0.9H36l4-14.1c0.1-0.5-0.2-1.1-0.7-1.2c-0.5-0.1-1.1,0.2-1.2,0.7   L36.5,39H30l-1.6-5.6c-0.2-0.5-0.7-0.8-1.2-0.7c-0.5,0.2-0.8,0.7-0.7,1.2l4,14.1h-3.3H26c-0.1-4.3-1.8-8.4-4.6-11.6   c-9-10.1-1.9-25.6,10.9-26.2C46.1,9.6,53.9,26,44.9,36.4z"></path>
                  <path d="M33.2,6.2c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1s-1,0.4-1,1v3.2C32.2,5.8,32.7,6.2,33.2,6.2z"></path>
                  <path d="M21.4,8.5c0.3,0.5,0.9,0.6,1.4,0.4c0.5-0.3,0.6-0.9,0.4-1.4l-1.6-2.8c-0.3-0.5-0.9-0.6-1.4-0.4c-0.5,0.3-0.6,0.9-0.4,1.4   L21.4,8.5z"></path>
                  <path d="M14.7,15.1l-2.8-1.6c-0.5-0.3-1.1-0.1-1.4,0.4c-0.3,0.5-0.1,1.1,0.4,1.4l2.8,1.6c0.5,0.3,1.1,0.1,1.4-0.4   C15.3,16,15.2,15.4,14.7,15.1z"></path>
                  <path d="M12.2,26.8c0-0.6-0.4-1-1-1H7.9c-0.6,0-1,0.4-1,1s0.4,1,1,1h3.2C11.7,27.8,12.2,27.4,12.2,26.8z"></path>
                  <path d="M13.5,36.9l-2.8,1.6c-0.5,0.3-0.6,0.9-0.4,1.4c0.3,0.5,0.9,0.6,1.4,0.4l2.8-1.6c0.5-0.3,0.6-0.9,0.4-1.4   C14.5,36.8,13.9,36.6,13.5,36.9z"></path>
                  <path d="M55.1,39l-2.8-1.6c-0.5-0.3-1.1-0.1-1.4,0.4c-0.3,0.5-0.1,1.1,0.4,1.4l2.8,1.6c0.5,0.3,1.1,0.1,1.4-0.4   C55.7,39.9,55.6,39.2,55.1,39z"></path>
                  <path d="M58.1,26.3h-3.2c-0.6,0-1,0.4-1,1s0.4,1,1,1h3.2c0.6,0,1-0.4,1-1S58.6,26.3,58.1,26.3z"></path>
                  <path d="M52.5,17.2l2.8-1.6c0.5-0.3,0.6-0.9,0.4-1.4c-0.3-0.5-0.9-0.6-1.4-0.4l-2.8,1.6c-0.5,0.3-0.6,0.9-0.4,1.4   C51.5,17.4,52.1,17.5,52.5,17.2z"></path>
                  <path d="M43.6,9.2c0.5,0.3,1.1,0.1,1.4-0.4L46.6,6c0.3-0.5,0.1-1.1-0.4-1.4c-0.5-0.3-1.1-0.1-1.4,0.4l-1.6,2.8   C43,8.3,43.2,8.9,43.6,9.2z"></path>
                  <path d="M28.3,20.5c-0.4-0.4-1-0.4-1.4,0l-3.1,3.1c-0.2,0.2-0.3,0.4-0.3,0.7s0.1,0.5,0.3,0.7l3.1,3.1c0.4,0.4,1,0.4,1.4,0   c0.4-0.4,0.4-1,0-1.4L26,24.3l2.4-2.4C28.7,21.5,28.7,20.9,28.3,20.5z"></path>
                  <path d="M40.2,20.5c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l2.4,2.4l-2.4,2.4c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l3.1-3.1   c0.2-0.2,0.3-0.4,0.3-0.7s-0.1-0.5-0.3-0.7L40.2,20.5z"></path>
                  <path d="M37.7,16.5c-0.5-0.3-1.1-0.1-1.4,0.4L29,30.7c-0.3,0.5-0.1,1.1,0.4,1.4c0.5,0.3,1.1,0.1,1.4-0.4l7.4-13.8   C38.4,17.3,38.2,16.7,37.7,16.5z"></path>
                </g>
              </g>
              <g
                id="SvgjsG1228"
                data-featurekey="kZnDdN-0"
                transform="matrix(1.6624707507213166,0,0,1.6624707507213166,85.50377537307742,27.424168095335858)"
                fill="url(#SvgjsLinearGradient1234)"
              >
                <path d="M12.76 18.5 c-1.28 1.1 -2.9 1.7 -4.7 1.7 c-3.64 0 -7.16 -2.96 -7.16 -7.2 s3.52 -7.2 7.16 -7.2 c1.78 0 3.38 0.6 4.64 1.66 l-1.02 1.16 c-0.98 -0.78 -2.24 -1.24 -3.5 -1.24 c-2.86 0 -5.56 2.32 -5.56 5.62 s2.7 5.62 5.56 5.62 c1.28 0 2.56 -0.48 3.54 -1.28 z M21.520000000000003 5.800000000000001 c3.64 0 7.16 2.96 7.16 7.2 s-3.52 7.2 -7.16 7.2 c-3.66 0 -7.16 -2.96 -7.16 -7.2 s3.5 -7.2 7.16 -7.2 z M21.520000000000003 18.62 c2.74 0 5.44 -2.32 5.44 -5.62 s-2.7 -5.62 -5.44 -5.62 c-2.76 0 -5.44 2.32 -5.44 5.62 s2.68 5.62 5.44 5.62 z M34.940000000000005 6 c4.08 0 7.08 3.1 7.08 7 s-3 7 -7.08 7 l-4.16 0 l0 -14 l4.16 0 z M34.92 18.42 c3.34 0 5.4 -2.42 5.4 -5.42 s-2.06 -5.42 -5.4 -5.42 l-2.48 0 l0 10.84 l2.48 0 z M45.68 18.44 l6.66 0 l0 1.56 l-7.06 0 l-1.26 0 l0 -14 l1.66 0 l6.48 0 l0 1.56 l-6.48 0 l0 4.64 l5.04 0 l0 1.52 l-5.04 0 l0 4.72 z M78.76 6 l-4.52 14 l-1.08 0 l-3.86 -10.94 l-3.84 10.94 l-1.08 0 l-4.54 -14 l1.72 0 l3.42 10.58 l3.74 -10.58 l1.16 0 l3.76 10.58 l3.42 -10.58 l1.7 0 z M82.22 6 l0 14 l-1.66 0 l0 -14 l1.66 0 z M93.66 6 l0 1.56 l-3.88 0 l0 12.44 l-1.66 0 l0 -12.44 l-3.9 0 l0 -1.56 l9.44 0 z M104.44000000000001 6 l1.66 0 l0 14 l-1.66 0 l0 -6.12 l-7.12 0 l0 6.12 l-1.66 0 l0 -14 l1.66 0 l0 6.32 l7.12 0 l0 -6.32 z M124.78000000000002 20 l-1.8 0 l-3.54 -5.04 l-0.38 0 l-2.9 0 l0 5.04 l-1.66 0 l0 -14 l4.56 0 c3.14 0 4.96 1.92 4.96 4.52 c0 2 -1.08 3.56 -3 4.16 z M116.16000000000001 7.5600000000000005 l0 5.92 l2.86 0 c2.02 0 3.34 -1.04 3.34 -2.96 c0 -1.94 -1.32 -2.96 -3.34 -2.96 l-2.86 0 z M137.9 20 l-1.44 -3.3 l-7.48 0 l-1.44 3.3 l-1.76 0 l6.24 -14 l1.38 0 l6.26 14 l-1.76 0 z M129.60000000000002 15.3 l6.24 0 l-3.12 -7.12 z M148.76 6 l0 9.32 c0 3.62 -2.1 4.92 -4.34 4.92 c-1.72 0 -3.04 -0.76 -3.76 -1.92 l1.04 -1.14 c0.56 0.84 1.46 1.46 2.66 1.46 c1.5 0 2.74 -0.76 2.74 -3.48 l0 -9.16 l1.66 0 z M152.82000000000002 18.44 l6.66 0 l0 1.56 l-7.06 0 l-1.26 0 l0 -14 l1.66 0 l6.48 0 l0 1.56 l-6.48 0 l0 4.64 l5.04 0 l0 1.52 l-5.04 0 l0 4.72 z M165.88 5.76 c2.18 0 3.78 1.44 4.38 2.94 l-1.26 0.68 c-0.64 -1.28 -1.66 -2.12 -3.12 -2.12 c-1.54 0 -2.6 0.88 -2.6 2.1 c0 1.14 0.72 1.86 2.24 2.44 l1.02 0.38 c2.52 0.94 4.1 2.02 4.1 4.24 c0 2.4 -2.3 3.88 -4.68 3.88 s-4.34 -1.44 -4.88 -3.44 l1.34 -0.64 c0.48 1.48 1.74 2.56 3.54 2.56 c1.6 0 2.96 -0.92 2.96 -2.34 c0 -1.6 -1.12 -2.2 -2.78 -2.84 l-1.04 -0.4 c-2.12 -0.8 -3.48 -1.9 -3.48 -3.88 c0 -2.04 1.8 -3.56 4.26 -3.56 z M181.32 6 l1.66 0 l0 14 l-1.66 0 l0 -6.12 l-7.12 0 l0 6.12 l-1.66 0 l0 -14 l1.66 0 l0 6.32 l7.12 0 l0 -6.32 z"></path>
              </g>
            </svg>
          </div>
          {/* <div className="hidden h-6 text-2xl font-semibold text-white sm:block">
            Code with Rajesh
          </div> */}
        </div>
      </a>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          <a
            className="hover:text-primary-500 dark:hover:text-primary-400 block font-medium text-gray-900 dark:text-gray-100"
            href="/blog"
          >
            Blog
          </a>
          {/* <a
            className="hover:text-primary-500 dark:hover:text-primary-400 block font-medium text-gray-900 dark:text-gray-100"
            href="/tags"
          >
            Tags
          </a> */}
          <a
            className="hover:text-primary-500 dark:hover:text-primary-400 block font-medium text-gray-900 dark:text-gray-100"
            href="/about"
          >
            About
          </a>
        </div>
        {/* <button aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 text-gray-900 dark:text-gray-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </button> */}

        <ThemeToggle />
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="md:hidden size-7" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <nav className="mt-8 flex h-full basis-0 flex-col items-start overflow-y-auto pl-12 pt-2 text-left">
                  <a
                    className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    href="/"
                  >
                    Home
                  </a>
                  <a
                    className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    href="/blog"
                  >
                    Blog
                  </a>
                  <a
                    className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    href="/tags"
                  >
                    Tags
                  </a>

                  <a
                    className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    href="/about"
                  >
                    About
                  </a>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div
          hidden={false}
          className="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
