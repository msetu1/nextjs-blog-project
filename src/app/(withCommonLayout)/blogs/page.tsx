import BlogCard from "@/app/components/BlogCard";
import { BlogProps } from "@/app/types/page";

const AllBlogs = async() => {
    const res =await fetch("http://localhost:4000/blogs",{cache:'no-store'})
  const blogs:BlogProps[] =await res.json();
    return (
        <div className=" my-16">
            <h2 className="text-3xl text-center">All Blogs</h2>
            <div className="mt-10 mx-16 grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-10">
        {
          blogs.map((blog)=><BlogCard blog={blog} key={blog.id} />)
        }
      </div>
        </div>
    );
};

export default AllBlogs;