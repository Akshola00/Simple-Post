import React, { useState } from "react";
import "./App.css";
import Post_grid from "./components/Post_grid";
import Navbar from "./components/Navbar";
import Single_post from "./components/Single_post";
import Post_send from "./components/Post_send";

function App() {
  const [selectedPost, setSelectedPost] = useState();
  const viewSinglePost = (postId) => {
    setSelectedPost(postId);
  };
  return (
    <>
      <Navbar />
      <div className="flex bg-base-100 flex-col gap-4 items-center justify-center w-full">
        <Post_grid onSinglePostSelected={viewSinglePost} />
        <Single_post postId={selectedPost} />
        <Post_send />
      </div>
    </>
  );
}

export default App;
