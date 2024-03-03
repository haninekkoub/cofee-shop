import { TextSegmentBlock } from "@/lib/types";
import { PortableText } from "@portabletext/react";

export default function TextSegment({ textSegment }: TextSegmentBlock) {
  return (
    <section className=" w-[70%] my-12 mx-auto text-center leading-8 font-windsor text-[#AEAEB0] ">
      <PortableText value={textSegment} />
    </section>
  );
}
