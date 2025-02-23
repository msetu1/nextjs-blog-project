"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogProps } from "../types/page";

const BlogCard = ({ blog }: { blog: BlogProps }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition duration-300">
      {/* Blog Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={600}
        className="w-full h-56 object-cover"
      />
      
      {/* Blog Content */}
      <div className="p-5">
        <span className="text-sm text-green-600 font-semibold uppercase">
          {blog.category}
        </span>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">{blog.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          By {blog.author} • {new Date(blog.date).toDateString()}
        </p>
        <p className="text-gray-600 mt-3 line-clamp-3">{blog.content}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium text-gray-600 bg-gray-200 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More and bye now Button */}
        <div className="flex items-center justify-between">
        <Link
          href={`/blog/${blog.id}`}
          className="mt-4 inline-block bg-[#65a30d] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Read More
        </Link>
        <button
          className="mt-4 inline-block bg-blue-500 hover:bg-[#65a30d] text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Bye Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
