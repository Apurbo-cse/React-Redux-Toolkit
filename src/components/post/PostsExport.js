import React from "react";
import { Link } from "react-router-dom";
import Pic1 from "../../assets/images/3.png";
import PostAuthor from "../common/PostAuthor";
import ReactionButtons from "../common/ReactionButtons";
import TimeAgo from "../common/TimeAgo";

const PostsExport = ({ post }) => {
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

          <h5 className="card-title mb-0">{post.title.substring(0, 25)}</h5>
          <p className="card-title mb-0">
            {post.body.substring(0, 48)}..
            <Link to={`${post.id}`}>See more</Link>
          </p>
          <ReactionButtons post={post} />
        </div>
      </div>
    </>
  );
};

export default PostsExport;
