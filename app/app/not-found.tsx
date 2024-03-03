import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1>oups u are lost</h1>
      <Link href="/">go home</Link>
    </div>
  );
}
