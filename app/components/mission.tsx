import { MissionBlock } from "@/lib/types";
import Images from "./ui/images";

export default function Mission({
  leftImage,
  description,
  rightImage,
}: MissionBlock) {
  return (
    <section className="w-full border-y-2 border-border flex">
      <div className="relative w-full ">
        <Images image={leftImage} alt="Our mission" className="h-4/5 w-4/5 " />
      </div>
      <div className="border-x-2 border-border p-9 w-full text-center">
        <h3 className="font-din uppercase text-4xl">
          OUR MISSION
          <br />-
        </h3>
        <p className="text-base font-windsor text-[#AEAEB0] leading-7">
          {description}
        </p>
      </div>
      <div className="relative w-full ">
        <Images image={rightImage} alt="Our mission" className="h-4/5 w-4/5 " />
      </div>
    </section>
  );
}
