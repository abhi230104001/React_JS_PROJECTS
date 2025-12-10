import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image?.[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        await appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } else {
      const file = data.image?.[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        data.featuredImage = file.$id;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData?.$id,
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="max-w-5xl mx-auto rounded-xl shadow-lg p-6 md:p-10 
                 grid grid-cols-1 md:grid-cols-3 gap-6 
                 bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-gray-200"
    >
      {/* Left side: text inputs */}
      <div className="md:col-span-2 space-y-4">
        <Input
          label="Title"
          placeholder="Enter the post title"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug"
          placeholder="Post slug"
          {...register("slug", { required: true })}
          onInput={(e) =>
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            })
          }
        />
        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            placeholder="Write your content here..."
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 
                       focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            rows={10}
            {...register("content", { required: true })}
            defaultValue={getValues("content")}
          />
        </div>
      </div>

      {/* Right side: file + status + button */}
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Featured Image</label>
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            className="block w-full text-sm text-gray-800 border border-gray-300 
                       rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("image", { required: !post })}
          />
        </div>

        {post && (
          <div>
            <p className="text-sm text-gray-600 mb-2">Current Image:</p>
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg shadow border border-gray-200"
            />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status"
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          className={`w-full py-2 rounded-lg shadow-md transition-all duration-200 ${
            post
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {post ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  );
}
