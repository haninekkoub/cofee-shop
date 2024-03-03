import { BannerBlock } from "@/lib/types";

export default function bannerText({
  textAlign,
  bannerText,
  textSize,
}: BannerBlock) {
  return (
    <section
      className="w-full  my-20 font-din tracking-wider"
      style={{
        textAlign,
        fontSize: textSize === "large" ? "4.5rem" : "2rem",
      }}
    >
      {bannerText}
    </section>
  );
}
