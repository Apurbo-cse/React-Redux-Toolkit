import React from "react";
import PostAuthor from "../common/PostAuthor";
import ReactionButtons from "../common/ReactionButtons";
import TimeAgo from "../common/TimeAgo";
import Pic1 from "../../assets/images/3.png";
import { useSelector } from "react-redux";
import { selectPostById } from "../../features/posts/postsSlice";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <div className="mt-3 row">
      <div className="col-md-8 mb-3">
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
          <p className="card-title mb-0">{post.body}</p>
          <ReactionButtons post={post} />
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card border-0 shadow p-2">
          <div className="d-flex">
            <div className="image col-4">
              <img src={Pic1} alt="" className="card-img-top " />
            </div>
            <div className="col-8 mx-2">
              <small className=" p-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
