import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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
          <h2 className="ml-5 mt-2 text-2xl text text-white font-bold font-roboto tracking-wider">
            NextAuth.js
          </h2>
          <p className="ml-5 text-[12px] text-white font-roboto">
            Authentication for Next.js
          </p>
        </div>
      </div>
      <ul className="flex w-full justify-evenly text-4xl font-rubicGlitch text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/client">About</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
}
