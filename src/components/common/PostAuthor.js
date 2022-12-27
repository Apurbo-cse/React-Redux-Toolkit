import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return (
    <>
      <small>
        <span>Author :{author ? author.name : " Unknown"}</span>
      </small>
    </>
  );
};
export default PostAuthor;
