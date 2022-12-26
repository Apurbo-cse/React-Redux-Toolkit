import React from "react";
import { Link } from "react-router-dom";

import AddPostForm from "../../features/posts/AddPostForm";
import PostsList from "../../features/posts/PostsList";

const Post = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          
          <PostsList />

          <AddPostForm />
        </div>
      </div>
    </>
  );
};

export default Post;
