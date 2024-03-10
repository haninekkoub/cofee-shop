import Link from "next/link";
import Social from "../social";
import Image from "next/image";
import Logo from "@/public/logo.png";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Location", href: "/location" },
  { name: "News", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Testimonials", href: "/" },
];

export default function Navbar() {
  return (
    <nav className="flex items-stratch border-x-2 border-b-2 border-border w-full -mb-[2px]">
      <div className="w-32 my-auto">
        <Image src={Logo} width={150} alt="logo" />
      </div>
      <div className="flex flex-col w-full border-l-2 border-border">
        <div className="flex w-full ">
          <div className="border-r-2 border-border w-full py-4 pr-4 overflow-hidden">
            <div className="flex text-xl justify-center animate-[translate_20s_linear_infinite] w-full font-windsor">
              <span className=" ">
                More than just coffee. Discover our delicious pastries too!
              </span>
            </div>
          </div>
          <Social />
        </div>
        <ul className="w-full flex justify-around items-center py-4 border-t-2 border-border">
          {links.map((link, id) => (
            <li key={id}>
              <Link href={link.href} className=" font-windsor ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
