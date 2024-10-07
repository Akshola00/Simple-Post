import React, { useEffect, useState } from "react";
import instance from "../axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Single_post = (props) => {
  const [pid, setPid] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    if (props.postId) {
      setLoading(true);
      instance
        .get("/posts/" + props.postId)
        .then((response) => {
          setLoading(false);

          console.log(response.data);
          setPid(response.data);
        })
        .catch((response) => {
          setLoading(false);

          console.log(response.message);
        });
    }
  }, [props.postId]);

  const deletSinglePost = (id) => {
    toast(`Pretend asif its deleted!`);
    instance
      .delete("/posts/" + id)
      .then((response) => {
        setPid(null);
      })
      .catch((response) => {
        console.log(response.message);
      });
  };

  const singlePost = pid ? (
    <div className="bg-base-100 flex justify-center ">
      <div className="w-[90%] p-3 rounded-lg flex flex-col justify-start shadow-xl">
        <b className="text-lg">Title:</b>
        <p>{pid.title}</p>
        <br />
        <b className="text-lg">Body:</b>

        <p>{pid.body}</p>
        <br />
        <b>
          By: <span className="text-blue-500"> {pid.id} </span>
        </b>
        <br />
        {/* <button onClick={notify}>Notify!</button> */}
        <button
          onClick={() => {
            deletSinglePost(pid.id);
          }}
          className="btn bg-red-500"
        >
          Delete
        </button>
        <ToastContainer />
      </div>
    </div>
  ) : null;

  const myNull = (
    <div className="w-[96%]">
      <div role="alert" className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Please select a post </span>
      </div>
    </div>
  );

  return loading ? (
    <span className="loading loading-ball loading-lg"></span>
  ) : singlePost ? (
    singlePost
  ) : (
    myNull
  );
};

export default Single_post;
