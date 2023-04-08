import Link from "next/link";

export default function NavigationBar() {
  return (
    <ul>
      <li>
        <Link href="/">see spotlights</Link>
      </li>
      <li>
        <Link href="/art-pieces">see all works</Link>
      </li>
    </ul>
  );
}
