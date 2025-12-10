import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full py-10 bg-gray-50 min-h-screen">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          All Posts
        </h1>

        {loading ? (
          <p className="text-center text-gray-600">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-600">No posts available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.$id}
                {...post}
                className="transition-transform duration-200 hover:scale-105"
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
