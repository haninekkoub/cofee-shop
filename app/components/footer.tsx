import Social from "./social";

export default function Footer() {
  return (
    <section className="w-full border-y-2 border-border mb-8 flex items-center ">
      <div className="flex-1 border-r-2 bordder-border py-4 pl-4">
        Cofee shop
      </div>
      <div className="flex items-center flex-1 justify-end ">
        <span className="border-r-2 bordder-border py-4 pr-4">
          some text here
        </span>
        <Social />
      </div>
    </section>
  );
}
