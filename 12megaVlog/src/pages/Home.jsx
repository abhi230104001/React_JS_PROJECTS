import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container } from "../components";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <Container>
          <div className="flex flex-col items-center space-y-6 text-center">
            <img
              src="https://illustrations.popsy.co/violet/blog-post.svg"
              alt="No posts"
              className="w-64 h-64"
            />
            <h1 className="text-4xl font-extrabold text-gray-800">
              No Posts Yet 📭
            </h1>
            <p className="text-lg text-gray-600">
              Login and create your first blog post to get started 🚀
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            Latest Blog Posts
          </h1>
          <p className="text-lg text-gray-500">
            Explore stories, ideas, and inspiration ✨
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
