import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Hello", content: "This is a continuation" },
  { id: "2", title: "Hello 2", content: "2 his is a continuation" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
