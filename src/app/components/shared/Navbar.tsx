"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="flex items-center justify-between bg-[#65a30d] py-6 px-16 font-semibold text-xl text-white">
        <Link href="/" className="text-2xl font-bold text-black">
          rfBlogs
        </Link>
        <div className="space-x-6 ">
          <Link
            href="/"
            className={pathname == "/" ? "text-black underline" : "hover:text-gray-200 hover:underline"}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={pathname == "/about" ? "text-black underline" : "hover:text-gray-200 hover:underline"}
          >
            About Us
          </Link>
          <Link href="/blogs" className={pathname == "/blogs" ? "text-black underline" : "hover:text-gray-200 hover:underline"}>
            All Blogs
          </Link>
          
          <Link href="/gallery" className={pathname == "/gallery" ? "text-black underline" : "hover:text-gray-200 hover:underline"}>
            Gallery
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
