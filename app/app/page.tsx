import About from "@/components/about";
import Banner from "@/components/banner";
import Description from "@/components/description";
import Product from "@/components/product";

export default function Home() {
  return (
    <div>
      <Banner
        children={
          <p>
            ROASTED TO ORDER. <br /> DELIVERED TO YOUR DOOR. <br /> -
          </p>
        }
        align="left"
      />
      <About />
      <Banner children="GETTING IT RIGHT SINCE 1982" align="center" />
      <Product />
      <Banner children="GETTING IT RIGHT SINCE 1982" align="center" />
      <Description />
    </div>
  );
}
