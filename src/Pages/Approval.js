import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Approval() {
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    setApproved(true);

    // Show pop-up message
    toast.success("Document has been added!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
    });
  }, []);

  return (
    <div className="approval-page">
      {approved && <Confetti />}
      <h1 className="text-2xl font-bold mb-6">Document Approval</h1>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <p className="mb-4 text-center"> Congrats!🥳</p>
        <p className="mb-4">
          {" "}
          Document No: <span className="font-bold">dRGJ132UdskjaKJ1</span>{" "}
          verified: 100% authentic
        </p>
      </div>
      <div className="flex items-center mt-6 gap-x-3">
        <Link
          to="/"
          className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 rtl:rotate-180"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>Home</span>
        </Link>
      </div>
    </div>
  );
}

export default Approval;
