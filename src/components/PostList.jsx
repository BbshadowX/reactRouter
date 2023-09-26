import { Link } from "react-router-dom";

export default function PostList() {
  return (
    <>
      <Link to="/post/1">Post 1</Link>
      <br />
      <Link to="/post/2">Post 2</Link>
    </>
  );
}
