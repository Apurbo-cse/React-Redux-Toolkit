import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Pic1 from "../../assets/images/3.png";
// import PostAuthor from "./PostAuthor";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../../features/posts/postsSlice";
import PostsExport from "../post/PostsExport";

// import TimeAgo from "./TimeAgo";
// import ReactionButtons from "./ReactionButtons";

const PostCard = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
    
  return (
    <>
      {postsStatus === "loading" ? (
        <p>"Loading..."</p>
      ) : (
        <>
          {postsStatus === "failed" ? (
            <p>{error}</p>
          ) : (
            <>
              {orderedPosts.map((post) => (
                <PostsExport key={post.id} post={post} />
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default PostCard;
