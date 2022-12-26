import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <>
      <div className="col-6 col-md-4 col-lg-3 mb-3">
        <div className="card border-0 shadow text-center ">
          <div className="card-body">
            <h5 className="card-title mb-0">{post.title.substring(0, 20)}</h5>
            <h6 className="card-title mb-0">{post.content.substring(0, 20)}</h6>
          </div>
        </div>
      </div>
    </>
  ));

  return (
    <>
      <div className="container">
        <div className="row my-3">
          <h2>Post</h2>
          {renderedPosts}
        </div>
      </div>
    </>
  );
};
export default PostList;
