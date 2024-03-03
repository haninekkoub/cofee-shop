import Link from "next/link";
import Social from "../social";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Location", href: "/location" },
  { name: "News", href: "/" },
  { name: "Shop", href: "/" },
  { name: "Testimonials", href: "/" },
];

export default function Navbar() {
  return (
    <nav className="flex items-stratch border-x-2 border-b-2 border-border w-full -mb-[2px]">
      <div className="w-32"></div>
      <div className="flex flex-col w-full border-l-2 border-border">
        <div className="flex justify-end">
          <div className="border-r-2 border-border py-4 pr-4">
            find the nearest splier
          </div>
          <Social />
        </div>
        <ul className="w-full flex justify-around items-center py-4 border-t-2 border-border">
          {links.map((link, id) => (
            <li key={id}>
              <Link href={link.href} className="">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
