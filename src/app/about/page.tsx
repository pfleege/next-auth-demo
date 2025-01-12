import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import AboutLoggedIn from "../components/AboutLoggedIn";
import Footer from "../components/Footer";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <AboutLoggedIn />
      ) : (
        <div className="flex flex-col items-center font-specialElite text-4xl text-center bg-gradient-to-b from-indigo-900 from-10% via-sky-500 via-30% to-fuchsia-950 to-90%">
          <h1 className="text-5xl text-white">
            Please log in to view more content.
          </h1>
          <Footer />
        </div>
      )}
    </>
  );
}
