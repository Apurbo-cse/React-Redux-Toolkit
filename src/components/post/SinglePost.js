import React from "react";
import PostAuthor from "../common/PostAuthor";
import ReactionButtons from "../common/ReactionButtons";
import TimeAgo from "../common/TimeAgo";
import Pic1 from "../../assets/images/3.png";
import { useSelector } from "react-redux";
import { selectPostById } from "../../features/posts/postsSlice";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  // retrieve postId
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <>
        <h2>Post not found!</h2>
      </>
    );
  }
  return (
    <>
      <div className="col-6 col-md-4 col-lg-3 mb-3">
        <div className="card border-0 shadow  p-2 ">
          <img src={Pic1} className="card-img-top " alt={Pic1} />
          <div className="d-flex justify-content-between">
            <div className="col-6">
              <PostAuthor userId={post.userId} />
            </div>
            <div className="col-6 d-flex justify-content-end">
              <TimeAgo timestamp={post.date} />
            </div>
            <hr />
          </div>

          <h5 className="card-title mb-0">{post.title}</h5>
          <p className="card-title mb-0">{post.body.substring(0, 35)}..</p>
          <ReactionButtons post={post} />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
