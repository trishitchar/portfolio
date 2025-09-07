import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="w-full flex items-center justify-between py-4 bg-yellow-300">
            <div className="space-x-4">
                <Link href="/projects" className="hover:underline">
                    Projects
                </Link>
                <Link href="/blog" className="hover:underline">
                    Blog
                </Link>
                <Link href="/contact" className="hover:underline">
                    Contact
                </Link>
            </div>
        </nav>
    )
}