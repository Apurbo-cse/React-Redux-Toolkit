import React, { useState } from "react";

import AddPostForm from "./AddPostForm";
import PostCard from "../common/PostCard";
import PostCreateModal from "../modal/PostCreateModal";

const Post = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="row my-3">
        <PostCard />

        <AddPostForm />

        <div className="col-2">
          <button
            className="btn btn-outline-dark"
            onClick={() => setModalShow(true)}
          >
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Create Post
          </button>
        </div>

        {/* <PostCreateModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      </div>
    </>
  );
};

export default Post;
