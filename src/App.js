import { Routes, Route } from "react-router-dom";

// import Home from "./components/Home";
import Post from "./components/post/Post";
// import Counter from "./features/counter/Counter";
import Layout from "./components/Layout";
import SinglePost from "./components/post/SinglePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="post">
            <Route index element={<Post />} />
            <Route path=":postId" element={<SinglePost />} />
          </Route>

          {/* <Route index element={<Home />} /> */}
          {/* <Route exact path="/count" element={<Counter />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
