import { Product } from "@/lib/types";
import Images from "./ui/images";

export default function ProductList({
  type,
  image,
  productName,
  Price,
  taste,
}: Product) {
  return (
    <section className="flex gap-12 w-full">
      <div className="w-full">
        <h1>{type}</h1>
        <div className="border-border border-2 relative w-1/3 h-96 ">
          <Images image={image} alt={"Product Images"} />
        </div>
        <div>
          <div>
            <p>{productName}</p>
            <span>{Price}</span>
          </div>
          <p>{taste}</p>
        </div>
        <button>Add To Cart</button>
      </div>
    </section>
  );
}
