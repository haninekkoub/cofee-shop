import { AboutBlock } from "@/lib/types";
import Images from "./ui/images";

export default function About({
  aboutImage,
  aboutDescription,
  featuredImageTop,
  featuredImageBottom,
}: AboutBlock) {
  return (
    <section className="w-full border-y-2 border-border flex">
      <div className="relative w-[20vw] ">
        <Images image={aboutImage} alt={""} />
      </div>
      <div className="border-x-2 border-border px-6 py-20 text-center flex-1 h-fit">
        <h3 className="text-5xl font-din uppercase">
          About Us
          <br />-
        </h3>
        <p className="text-lg font-windsor text-[#AEAEB0] leading-8">
          {aboutDescription}
        </p>
      </div>
      <div className="w-[20vw]">
        <div className="border-b-2 border-border w-full h-3/5 relative overflow-hidden object-center">
          <Images image={featuredImageTop} alt={""} className="h-4/5 w-4/5 " />
        </div>
        <div className="h-2/5 w-full relative overflow-hidden ">
          <Images
            image={featuredImageBottom}
            alt={""}
            className="h-4/5 w-4/5 "
          />
        </div>
      </div>
    </section>
  );
}
