import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import PostList from "./components/PostList";
import About from "./components/About";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Blue from "./components/Blue";
import Red from "./components/Red";

export default function App() {
  return (
    <div id="main-section">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <br />
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <br />
          <li>
            <Link to="/about">About</Link>
          </li>
          <br />
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <br />
          <li>
            <Link to="/blue">Blue</Link>
          </li>
          <br />
          <li>
            <Link to="/red">Red</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/Red" element={<Red />} />
      </Routes>
    </div>
  );
}
