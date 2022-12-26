import React from "react";
import { useSelector } from "react-redux";
import Pic1 from "../../assets/images/3.png";
import PostAuthor from "../../features/posts/PostAuthor";
import { selectAllPosts } from "../../features/posts/postsSlice";
import TimeAgo from "../../features/posts/TimeAgo";

const PostCard = () => {
  const posts = useSelector(selectAllPosts);
  return (
    <>
      {posts.map((post) => (
        <div className="col-6 col-md-4 col-lg-3 mb-3" key={post.id}>
          <div className="card border-0 shadow  p-2 ">
            <img src={Pic1} className="card-img-top " alt={Pic1} />
            <div className="d-flex">
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title mb-0">{post.title}</h5>
              <h6 className="card-title mb-0">
                {post.content.substring(0, 20)}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostCard;
