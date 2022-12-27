import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../features/posts/postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const PostCreateModal = (props) => {
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
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New post create
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Title
              </label>
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
                className="form-control"
              />
              {/* <small id="emailHelp" className="form-text text-danger">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Content
              </label>
              <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
                class="form-control"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Author
              </label>
              <select
                id="postAuthor"
                value={userId}
                onChange={onAuthorChanged}
                className="form-control"
              >
                <option value=""></option>
                {usersOptions}
              </select>
            </div>

            <button
              type="button"
              onClick={onSavePostClicked}
              disabled={!canSave}
              class="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PostCreateModal;
