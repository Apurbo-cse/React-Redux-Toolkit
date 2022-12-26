import React from "react";
import { useSelector } from "react-redux";
import Pic1 from "../../assets/images/3.png";
import PostList from "../../features/postCounter/PostList";
import { selectAllPosts } from "../../features/postCounter/postsSlice";
import CreatePost from "./CreatePost";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const Post = () => {
  const posts = useSelector(selectAllPosts);
  return (
    <>
      <div className="container">
        <div className="row my-3">
          {posts.map((post) => (
            <div className="col-6 col-md-4 col-lg-3 mb-3" key={post.id}>
              <div className="card border-0 shadow   ">
                <img src={Pic1} className="card-img-top p-2" alt={Pic1} />
                <div className="d-flex">
                  <PostAuthor userId={post.userId} />
                  <TimeAgo timestamp={post.date} />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">
                    {post.title.substring(0, 20)}
                  </h5>
                  <h6 className="card-title mb-0">
                    {post.content.substring(0, 20)}
                  </h6>
                </div>
              </div>
            </div>
          ))}

          <PostList />

          <CreatePost />
        </div>
      </div>
    </>
  );
};

export default Post;
