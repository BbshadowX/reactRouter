import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/about");
  }
  return (
    <>
      <h1>Hello, World</h1>
      <button onClick={handleButtonClick}>Go to about Page!</button>
    </>
  );
}
