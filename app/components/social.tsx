import Link from "next/link";

interface linkProps {
  name: string;
  href: string;
}

const socials: linkProps[] = [
  { name: "ab", href: "/" },
  { name: "cd", href: "/" },
  { name: "ef", href: "/" },
];
export default function Social() {
  return (
    <ul className="flex gap-3 mx-4 items-center">
      {socials.map((social, id) => (
        <li key={id}>
          <Link href={social.href}>{social.name}</Link>
        </li>
      ))}
    </ul>
  );
}
