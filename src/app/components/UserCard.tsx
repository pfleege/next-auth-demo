import Image from "next/image";
type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;
type Props = {
  user: User;
};
export default function Card({ user }: Props) {
  //console.log(user)
  const greeting = user?.name ? (
    <div className="flex flex-col items-center p-6 font-bold text-5xl text-white">
      Welcome {user?.name}!
    </div>
  ) : null;
  // const emailDisplay = user?.email ? (
  //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
  //         {user?.email}
  //     </div>
  // ) : null
  const userImage = user?.image ? (
    <Image
      className="border-4 border-fuchsia-500 shadow-2xl shadow-white rounded-full mx-auto mt-4 mb-8"
      src={user?.image}
      width={100}
      height={100}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null;
  return (
    <section className="flex flex-col gap-4">
      {greeting}
      {/* {emailDisplay} */}
      {userImage}
      <p className="text-2xl text-center text-white">Feel free to explore!</p>
    </section>
  );
}
