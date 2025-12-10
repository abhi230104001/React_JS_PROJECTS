import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
        setLoading(false);
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
        Loading post...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
        Post not found.
      </div>
    );
  }

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <Container>
        {/* Featured Image */}
        <div className="relative w-full mb-8">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full max-h-[450px] object-cover rounded-xl shadow-md"
          />

          {/* Edit/Delete (only for author) */}
          {isAuthor && (
            <div className="absolute top-4 right-4 flex space-x-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500 hover:bg-green-600">Edit</Button>
              </Link>
              <Button bgColor="bg-red-500 hover:bg-red-600" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          {post.title}
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  );
}
