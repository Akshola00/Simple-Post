import axios from "axios";
import React, { useState } from "react";
import instance from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Post_send = () => {
  const [details, setDetails] = useState({
    title: "",
    body: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    const post  = {...details, "userId": 1,}
    console.log
    instance
      .post("/posts", post)
      .then((response) => {
        console.log(response);
        toast(" Added successfully")

      })
      .catch((error) => {
        console.log( "the error is", error);
      });
  };

  return (
    <div className="flex justify-center bg-base-100 mb-4 w-full">
      <form
        onSubmit={handleForm}
        className="shadow-xl p-6  border rounded-2xl w-[96%]"
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 ">Add Post</h2>
            <p className="mt-1 text-sm leading-6 ">
              This information will be displayed publicly so be careful what you
              write.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4 ">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 "
                >
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      value={details.title}
                      onChange={(e) =>
                        setDetails({ ...details, title: e.target.value })
                      }
                      id="title"
                      name="title"
                      type="text"
                      placeholder="janesmith"
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-2  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="body"
                  className="block text-sm font-medium leading-6 "
                >
                  Body
                </label>
                <div className="mt-2">
                  <textarea
                    value={details.body}
                    onChange={(e) =>
                      setDetails({ ...details, body: e.target.value })
                    }
                    id="body"
                    name="body"
                    rows={3}
                    className="block bg-base-100 w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 ">
                  Write all details of your post here.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 ">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Post_send;
