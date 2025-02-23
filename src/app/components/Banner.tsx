"use client";

import Image from "next/image";
import Link from "next/link";

const BlogBanner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <Image
        src="https://media.istockphoto.com/id/1220573371/photo/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-office-desk-with-laptop.jpg?s=612x612&w=0&k=20&c=xmrSzPD4LCRhPD4L5TlttC88sSYe9Pc3J2ZnxCMzzyQ="
        alt="Blog Banner"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to Our Blog
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Stay updated with the latest trends and insights
        </p>
        <Link
          href="/blogs"
          className="mt-6 inline-block bg-[#65a30d] hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Read Articles
        </Link>
      </div>
    </div>
  );
};

export default BlogBanner;
