"use client";
import Image from "next/image";
import { useState } from "react";

type GalleryItem = {
  id: number;
  title: string;
  imageUrl: string;
};

const GalleryPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gallery, setGallery] = useState<GalleryItem[]>([
    {
      id: 1,
      title: "Sunset Over the Mountains",
      imageUrl: "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
    },
    {
      id: 2,
      title: "Forest in Autumn",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04LfAxi1UY5QAArsIBIEslK3SFIzVa_Kckm7UV8dvbtmoAy57Lknm3nSVE6mNk2Qb_64&usqp=CAU",
    },
    {
      id: 3,
      title: "City Skyline at Night",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86KVcpAUeW8wSkkc-Bxt89hF23gC_Jg9nfoPH3wv2H3otMwh-8phJPN5Mw7_08Ct-tHM&usqp=CAU",
    },
    {
      id: 4,
      title: "Ocean Waves",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvZBHIpQTRJbLllFXOeMKBlLx3CBuA5VhhsnjJXTGUGKnI45xBdxVH8or8L7mFIfhg_Q&usqp=CAU",
    },
    {
      id: 5,
      title: "Desert Landscape",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hoh_th0j5bItCls5cJc-fMWWVkeDyvMBs59MQtnQDdRnag2_xgX63EsgvNBO8jhB2is&usqp=CAU",
    },
    {
      id: 6,
      title: "Snowy Mountains",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs5HYjUsLUmVNyX0sAXjlrqZOYD4tNLAmINeKKmKtP0K43MtNb5uJbICBnulsdF5H6JM&usqp=CAU",
    },
  ]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center  mb-6">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
