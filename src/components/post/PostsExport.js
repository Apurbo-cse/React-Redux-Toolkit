import React from "react";
import Pic1 from "../../assets/images/3.png";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExport = (posts) => {
  return (
    <>
      <div className="col-6 col-md-4 col-lg-3 mb-3">
        <div className="card border-0 shadow  p-2 ">
          <img src={Pic1} className="card-img-top " alt={Pic1} />
          <div className="d-flex justify-content-between">
            <div className="col-6">
              <PostAuthor userId={posts.userId} />
            </div>
            <div className="col-6 d-flex justify-content-end">
              <TimeAgo timestamp={posts.date} />
            </div>
            <hr />
          </div>

          <h5 className="card-title mb-0">{posts.title}</h5>
          <p className="card-title mb-0">{posts.content.substring(0, 35)}..</p>
          <ReactionButtons post={posts} />
        </div>
      </div>
    </>
  );
};

export default PostsExport;
