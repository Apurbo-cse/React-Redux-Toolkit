import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost, postAdded } from "../../features/posts/postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const PostCreateModal = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

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
      </Modal>
    </>
  );
};
export default PostCreateModal;
