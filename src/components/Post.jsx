import { useParams } from "react-router-dom";

export default function Post() {
  const params = useParams();
  console.log("params".params);
  return (
    <>
      <h1>{params.id}</h1>
    </>
  );
}
