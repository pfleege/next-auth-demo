import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative flex h-[250px] bg-top bg-[url('/navBg.jpg')]">
      <div className="flex m-[50px] w-[200px] gap-5 z-10">
        <div>
          <video
            className="size-[150px] border-4 border-blue-50 rounded-full shadow-videoShadowBlue overflow-hidden object-cover brightness-50 absolute"
            src={"/bgVideo.mp4"}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div>
          <video
            className="size-[75px] m-1 rounded-full shadow-imgShadowBlue overflow-hidden object-cover brightness-50 absolute"
            src={"/bgVideo.mp4"}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div>
          <video
            className="size-[30px] m-1 rounded-full shadow-imgShadowBlue overflow-hidden object-cover brightness-50 absolute"
            src={"/bgVideo.mp4"}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
      <Image
        className="absolute w-[80vw] left-40"
        src="/lightning.png"
        alt="NextAuth logo"
        width={1280}
        height={660}
        priority
      />
    </div>
  );
};
export default Footer;
