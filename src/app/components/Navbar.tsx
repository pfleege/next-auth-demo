import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-end h-screen py-[5vw] bg-center bg-cover bg-[url('/navBg.jpg')]">
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
