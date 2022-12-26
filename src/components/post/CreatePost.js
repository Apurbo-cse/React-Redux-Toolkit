import React from "react";

const CreatePost = () => {
  return (
    <>
      <form className="col-md-6">
        <h2>Add a New Post</h2>

        <div class="form-group">
          <label for="exampleInputEmail1">Post Title:</label>
          <input
            class="form-control"
            type="text"
            id="postTitle"
            name="postTitle"
          />
          {/* <small id="emailHelp" class="form-text text-warning">
            We'll never share your email with anyone else.
          </small> */}
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Content:</label>
          <input
            class="form-control"
            type="text"
            id="postContent"
            name="postTitle"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Author:</label>
          <select class="form-control" id="postAuthor">
            <option value=""></option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
