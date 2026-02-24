import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/profile.jpg"; // replace with your profile image

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Branding */}
        <div className="flex items-center gap-2">
       <Image
  src="/profile.jpg"
  alt="Sylviah Rutto"
  width={50}
  height={50}
  className="rounded-full"
/>


        {/* Navbar */}
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <Link href="#about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-blue-600 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
