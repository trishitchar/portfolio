"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full flex items-center justify-between py-4 sticky top-0 z-10 px-8 border-b border-border bg-background/30 backdrop-blur-md">
      <div className="space-x-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:underline ${pathname === href ? "font-bold underline" : ""
              }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
