import React from "react";
import AddPostForm from "../../features/posts/AddPostForm";
import PostCard from "../common/PostCard";

const Post = () => {
  return (
    <>
      <div className="row my-3">
        <PostCard />

        <AddPostForm />
      </div>
    </>
  );
};

export default Post;
