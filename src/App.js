import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/include/Navbar";
import Home from "./components/Home";
import Post from "./components/post/Post";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/count" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
