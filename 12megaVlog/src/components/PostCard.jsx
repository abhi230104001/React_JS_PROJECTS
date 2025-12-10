import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  let imageUrl = "https://placehold.co/600x400?text=No+Image";

  if (featuredImage) {
    imageUrl = appwriteService.getFilePreview(featuredImage);
  }

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4">
        <div className="w-full mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-xl object-cover w-full h-48"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x400?text=No+Image";
            }}
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
