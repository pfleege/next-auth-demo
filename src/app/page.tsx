import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center font-specialElite text-4xl text-center bg-gradient-to-b from-indigo-900 from-10% via-sky-500 via-30% to-fuchsia-950 to-90%">
        {session ? (
          <div className="flex flex-col items-center my-20 p-20 w-[60vw] rounded-xl shadow-lg bg-slate-900 border-4 border-fuchsia-700">
            <UserCard user={session?.user} />
          </div>
        ) : (
          <>
            <h1 className="pt-2 text-5xl text-white">
              Please log in to view more content.
            </h1>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
