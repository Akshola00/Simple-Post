import React, { useEffect, useState } from "react";
import instance from "../axios";

const Post_grid = ({onSinglePostSelected}) => {
  const [post, setPost] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    instance
      .get("/posts")
      .then((response) => {
        console.log(response);
        const fullPost = response.data
        setPost(fullPost.slice(0, 7));
      })
      .catch((response) => {
        console.log(response);
        setPost(null);
        setError(["Oops, An Error Occured: " + response.message]);
      });
  }, []);
  const errorDiv = error && (
    <div role="alert" className="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span> {error} </span>
    </div>
  );

  const postList =
    post &&
    post.map((posts) => {
      return (
        <div key={posts.id} className="w-full h-full flex align-middle items-center justify-center">
          <div className="card bg-[--color-mybg] border-blue-300 borde w-full shadow-xl">
            <div className="card-body">
              <p className="text-right">
                by <b>User {posts.id} </b>
              </p>
              <h2 className="font-bold text-xl truncate max-w-xs">{posts.title}</h2>
              <p className="line-clamp-3 max-w-xs">{posts.body}</p>
              <div className="card-actions justify-end truncate max-w-xs">
                <button onClick={() => {onSinglePostSelected(posts.id)}} className="btn btn-primary">View</button>{" "}
                {/* onclick after */}
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div>
      <div className="grid bg-base-100 p-1 grid-cols-1 gap-6">
        {error ? errorDiv : postList}
      </div>
    </div>
  );
};

export default Post_grid;
