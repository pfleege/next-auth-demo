"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col justify-between h-screen py-[5vw] bg-center bg-cover bg-[url('/navBg.jpg')]">
      <div className="flex items-start">
        <Image
          className="ml-10 w-[120]"
          src="/nextAuthLogo.png"
          alt="NextAuth logo"
          width={327}
          height={361}
          priority
        />
        <div className="flex flex-col">
          <Image
            className="ml-5 mt-5 w-[200] invert"
            src="/next.svg"
            alt="Next.js logo"
            width={300}
            height={50}
          />
          <h2 className="ml-5 mt-2 text-xl text text-white font-bold font-roboto tracking-wider">
            NextAuth.js - Demo
          </h2>
          <p className="ml-5 text-[12px] text-white font-roboto">
            Authentication for Next.js
          </p>
        </div>
      </div>
      <ul className="flex h-[100px] w-full items-center justify-evenly text-4xl font-rubicGlitch bg-violet-900 bg-opacity-50">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-blue-600 py-1 px-3 border-y-4 border-blue-700"
                : "text-neutral-400 hover:text-orange-400"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-blue-400 py-1 px-3 border-y-4 border-blue-700"
                : "text-neutral-400 hover:text-orange-400"
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/api/auth/signin"
            className={
              pathname === "/api/auth/signin"
                ? "text-blue-600 py-1 px-3 border-y-4 border-blue-700"
                : "text-neutral-400 hover:text-orange-400"
            }
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link
            href="/api/auth/signout"
            className={
              pathname === "/api/auth/signout"
                ? "text-blue-600 py-1 px-3 border-y-4 border-blue-700"
                : "text-neutral-400 hover:text-orange-400"
            }
          >
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
