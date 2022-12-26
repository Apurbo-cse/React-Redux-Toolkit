import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../features/postCounter/postsSlice";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      useDispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
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
          <select class="form-control" id="postAuthor">
            <option value=""></option>
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
