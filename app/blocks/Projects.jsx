"use client";

import { useEffect, useState } from "react";
import { client } from "../sanity/client";

// Define the GROQ query directly
const POSTS_QUERY = `*[_type == "project"]{_id, title, description}`;

const options = { next: { revalidate: 30 } };

export default function Projects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await client.fetch(POSTS_QUERY, {}, options);
        console.log("Fetched Posts:", fetchedPosts); // Log the fetched data
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error); // Log any errors
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="h-[500px] bg-white w-full text-black py-12">
      <div className="mx-auto container flex flex-col gap-12">
        <p className="font-crispy text-4xl">projects</p>
        <div>
          {posts.length > 0
            ? posts.map((post) => <div key={post._id}>{post.title}</div>)
            : "Loading..."}
        </div>
      </div>
    </div>
  );
}