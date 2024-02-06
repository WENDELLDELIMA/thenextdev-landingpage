import Image from "next/image";

function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-row-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/avatar.jpg"
              alt="Mel Jhonsons"
              width={800}
              height={800}
              quality={100}
              priority
              className="aspect-square rotate-6 rounded-lg dark:bg-zinc-800 bg-zinc-100 object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            Mel jhonsons
          </h2>
          <p>
            {" "}
            Mel jhonsons gosta de dorama, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Velit, dicta sunt. Eius ex ab temporibus
            consectetur dolore quod natus quam minima similique dicta itaque
            voluptatem rerum reiciendis quisquam, cum magni?
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <div className="text-2xl">🥹</div>
            <div className="text-2xl">🥹</div>
            <div className="text-2xl">🥹</div>
            <div className="text-2xl">🥹</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
