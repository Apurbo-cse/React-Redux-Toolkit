import React from "react";
import AddPostForm from "../../features/posts/AddPostForm";
import PostsList from "../../features/posts/PostsList";
import PostCard from "../common/PostCard";

const Post = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <PostCard />

          <PostsList />

          <AddPostForm />
        </div>
      </div>
    </>
  );
};

export default Post;
