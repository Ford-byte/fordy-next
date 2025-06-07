"use client";

import { useState, useEffect } from "react";
import { client } from "../sanity/client";
import Link from "next/link";

const POSTS_QUERY = `*[_type == "project"]{
  _id, link, company_name, title, company, from, to, description,
  image {
    asset->{
      _id,
      url
    }
  }
}
`;

const options = { next: { revalidate: 30 } };

export default function Page() {
  const navigation = [
    { name: "All" }
    // { name: "Media" },
    // { name: "E-commerce" },
    // { name: "Corporate" },
  ];

  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [seeName, setSeeName] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const fetchedPosts = await client.fetch(POSTS_QUERY, {}, options);
        setPosts(fetchedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-12 bg-white min-h-fit h-screen">
      <h1 className="text-4xl font-crispy text-gray-700">Projects</h1>
      <div className="py-6">
        <div className="flex gap-4">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelected(item.name)}
              className={`px-5 py-[7px] rounded-lg font-[600] text-sm ${
                selected === item.name
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 text-gray-500 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      {loading && <p className="text-gray-500">Loading posts...</p>}
      {!loading && !error && posts.length > 0 && (
        <div className="mt-6 lg:mt-0 grid lg:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <div
              key={post._id}
              className="relative h-[225px]  mb-4 w-full p-4 shadow-md flex flex-col justify-between group"
            >
              <div
                className="absolute inset-0 rounded-lg top-0 left-0 w-full z-[2]
                h-full overflow-hidden"
              >
                <img
                  src={post?.image?.asset?.url}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-lg"
                />
              </div>
              <div
                className={`absolute top-0 z-[0] flex left-0 -translate-y-[99%] transition-all duration-100 bg-black/50 w-[90%] ml-4 justify-end px-2 font-bold rounded-t-lg ${
                  hoveredIndex === index ? "slide-in-bottom" : "h-[0] invisible"
                }`}
              >
                {post.title}
              </div>
              <div
                className={`absolute ${post?.image?.asset?.url ? "bg-[#7366db]/80 " : "bg-[#7366db]"} inset-0 w-full h-full z-[2] rounded-lg `}
              ></div>

              <div className="relative w-fit">
                <span className="absolute top-0 -translate-y-1/3 left-0 w-full bg-yellow-500 h-[50px] z-[4] rounded-b-lg"></span>
                <span className="relative flex z-[6] text-black px-2 font-bold">
                  E-commerce
                </span>
              </div>
              <h2 className="text-xl font-bold z-2">{post.title}</h2>
              <Link
                href={post?.link}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="size-[50px] peer bg-yellow-500 flex items-center justify-center rounded-full pointer-cursor z-[7]"
              >
                <svg className="size-[20px] fill-red-700" viewBox="0 0 512 512">
                  <g>
                    <path
                      d="M312.453 199.601a116.167 116.167 0 0 0-20.053-16.128 119.472 119.472 0 0 0-64.427-18.859 118.952 118.952 0 0 0-84.48 34.987L34.949 308.23a119.466 119.466 0 0 0-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0 0 84.395-34.816l89.6-89.6a8.534 8.534 0 0 0-6.059-14.592h-3.413a143.626 143.626 0 0 1-54.613-10.581 8.533 8.533 0 0 0-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 0 0 9.899-21.675 34.137 34.137 0 0 0-9.9-26.282z"
                      fill="#ff0000"
                      opacity="1"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 0 0-1.792 9.387 8.532 8.532 0 0 0 8.021 5.205h3.157a143.357 143.357 0 0 1 54.528 10.667 8.533 8.533 0 0 0 9.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 0 0-9.899 21.845 34.137 34.137 0 0 0 9.899 26.283 118.447 118.447 0 0 0 34.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 0 0 5.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0 0 55.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z"
                      fill="#ff0000"
                      opacity="1"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      )}
      {!loading && !error && posts.length === 0 && (
        <p className="text-gray-500">No posts available.</p>
      )}
    </div>
  );
}
