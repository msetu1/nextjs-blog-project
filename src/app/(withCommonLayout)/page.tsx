import Link from "next/link";
import BlogBanner from "../components/Banner";
import BlogCard from "../components/BlogCard";
import { BlogProps } from "../types/page";

const HomePage = async() => {
  const res =await fetch("http://localhost:4000/blogs",{next:{revalidate:5}})
  const blogs:BlogProps[] =await res.json();
  return (
    <div>
      <BlogBanner/>
      <div className="my-10 mx-16 grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-10">
        {
          blogs.slice(0,3).map((blog)=><BlogCard blog={blog} key={blog.id} />)
        }
      </div>
      <div className="text-center mb-16">
        <Link
          href={`/blogs`}
          className="mt-4 inline-block bg-[#65a30d] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
         All Blogs
        </Link>
      </div>
    </div>
  );
};

export default HomePage;