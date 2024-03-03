import { ShowCaseBlock } from "@/lib/types";
import Images from "./ui/images";

export default function Showcase({
  leftImage,
  centerImage,
  rightImage,
}: ShowCaseBlock) {
  return (
    <section className="w-full h-80 border-y-2 border-border flex">
      <div className="w-1/3 relative overflow-hidden object-center">
        <Images image={leftImage} alt={""} />
      </div>

      <div className="w-2/3 relative overflow-hidden object-center border-x-2 border-border">
        <Images image={centerImage} alt={""} className="aspect-video" />
      </div>
      <div className="w-1/3 relative overflow-hidden object-center">
        <Images image={rightImage} alt={""} />
      </div>
    </section>
  );
}
