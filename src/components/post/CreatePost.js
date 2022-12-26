import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../features/postCounter/postsSlice";

import { selectAllUsers } from "../users/usersSlice";

const CreatePost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <>
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    </>
  ));

  return (
    <>
      <form className="col-md-6">
        <h2>Add a New Post</h2>

        <div class="form-group">
          <label for="exampleInputEmail1">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            class="form-control"
          />
          {/* <small id="emailHelp" class="form-text text-warning">
            We'll never share your email with anyone else.
          </small> */}
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Author:</label>

          <select
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
            class="form-control"
          >
            <option value=""></option>
            {usersOptions}
          </select>
        </div>

        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
          class="btn btn-primary my-3"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
