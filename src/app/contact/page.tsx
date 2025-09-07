import Link from "next/link";


export default function Contact() {
    return (
        <div className="p-8 flex flex-col gap-4">
            <h1 className="text-4xl font-bold mb-4">Contact Page</h1>
            <p className="text-gray-600 mt-2">
                Get in touch with Trishit Char.
            </p>
            <Link href="mailto:trishitchar@gmail.com" className="text-blue-500 hover:underline">
                trishitchar@gmail.com
            </Link>
            <Link href={'https://linkedin.com/in/trishitchar'} className="text-blue-500 hover:underline">
                LinkedIn Profile
            </Link>
            <Link href={'https://github.com/trishitchar'} className="text-blue-500 hover:underline">
                GitHub Profile
            </Link>
            <div className="mt-4">
                <Link href="https://cal.com/trishit/" className="text-blue-500 hover:underline">
                    Schedule a Meeting
                </Link>
            </div>
        </div>
    )
}