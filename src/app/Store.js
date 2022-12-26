import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../components/users/usersSlice";

export const Store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
