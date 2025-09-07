"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full flex items-center justify-between py-4 bg-yellow-300 sticky top-0 z-10 px-8 border-b border-gray-300 dark:border-gray-700">
      <div className="space-x-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:underline ${
              pathname === href ? "font-bold underline" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
