import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <Container>
        <div className="flex justify-center">
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
