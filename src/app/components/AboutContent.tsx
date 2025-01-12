import Image from "next/image";
const AboutContent = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col w-full items-center md:flex-row justify-between gap-2 md:gap-10 md:w-[90vw] my-[50px] md:ml-auto p-4 bg-neutral-900 bg-opacity-60 rounded-l-3xl text-white font-specialElite">
        <Image
          className="ml-5 md:max-h-[200px] md:max-w-[320px] shadow-imgShadowFuchsia rounded-md"
          src={"/aboutPic1.jpg"}
          alt="Data highway tunnel"
          height={400}
          width={640}
        />
        <div className="flex w-[80vw] md:w-[50vw] flex-col">
          <h2 className="py-5 text-3xl">Data Highway</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            deleniti quos tempora, iure officiis a illo nostrum fugit accusamus
            neque.
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            harum!
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse w-full items-center md:flex-row justify-between gap-2 md:gap-10 md:w-[90vw] my-[50px] md:mr-auto p-4 bg-neutral-900 bg-opacity-60 rounded-r-3xl text-white font-specialElite">
        <div className="flex w-[80vw] md:w-[50vw] flex-col">
          <h2 className="py-5 text-3xl">Optimized Code</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            deleniti quos tempora, iure officiis a illo nostrum fugit accusamus
            neque.
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            harum!
          </p>
        </div>
        <Image
          className="mr-5 md:max-h-[200px] md:max-w-[320px] shadow-imgShadowBlue rounded-md"
          src={"/aboutPic2.jpg"}
          alt="Data highway tunnel"
          height={400}
          width={640}
        />
      </section>
      <section className="flex flex-col w-full items-center md:flex-row justify-between gap-2 md:gap-10 md:w-[90vw] my-[50px] md:ml-auto p-4 bg-neutral-900 bg-opacity-60 rounded-l-3xl text-white font-specialElite">
        <Image
          className="ml-5 md:max-h-[200px] md:max-w-[320px] shadow-imgShadowOrange rounded-md"
          src={"/aboutPic3.jpg"}
          alt="Data highway tunnel"
          height={400}
          width={640}
        />
        <div className="flex w-[80vw] md:w-[50vw] flex-col">
          <h2 className="py-5 text-3xl">Optimal Bandwidth</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            deleniti quos tempora, iure officiis a illo nostrum fugit accusamus
            neque.
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            harum!
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse w-full items-center md:flex-row justify-between gap-2 md:gap-10 md:w-[90vw] my-[50px] md:mr-auto p-4 bg-neutral-900 bg-opacity-60 rounded-r-3xl text-white font-specialElite">
        <div className="flex w-[80vw] md:w-[50vw] flex-col">
          <h2 className="py-5 text-3xl">Go Explore!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            deleniti quos tempora, iure officiis a illo nostrum fugit accusamus
            neque.
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            harum!
          </p>
        </div>
        <Image
          className="mr-5 md:max-h-[200px] md:max-w-[320px] shadow-imgShadowGreen rounded-md"
          src={"/aboutPic4.jpg"}
          alt="Data highway tunnel"
          height={400}
          width={640}
        />
      </section>
    </div>
  );
};
export default AboutContent;
