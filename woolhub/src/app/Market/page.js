"use client";
import React from "react"; 
import Header from "./components/Header";
import { useState } from 'react';
import { css } from '@emotion/react';
import { HashLoader } from 'react-spinners'; 
import LineChart from "./components/LineChart";
import Image from "next/image";
import face1 from "../Market/images/face1.jpeg";
import face2 from "../Market/images/face2.jpeg";
import face3 from "../Market/images/face3.jpeg";
import face4 from "../Market/images/face4.jpeg";
import face5 from "../Market/images/face5.jpeg";
import gifImage from "../Market/images/icons8-circled.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true); // State to control when to display the spinner

  // Simulate loading delay (you can replace this with your actual loading logic)
  setTimeout(() => {
    setLoading(false);
  }, 3000); // 2 seconds
  
  return (
    // Main Section
    <div className="items-center justify-items-center">

    {/* Loader Section */}
    {loading ? (
        <div style={spinnerStyle}>
          <HashLoader
            size={50}
            color={'#2267f2'}
            loading={loading}
          />
        </div>
      ) : (
        <>
      {/* Header Section */}
      <Header />

      {/* STATS DATA */}
      <div className="flex align-center justify-center flex-wrap gap-x-12 gap-y-12 px-4 ml-12 py-20 lg:px-20 sm:px-8">
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize text-blue-600">
                  Auction Price
                </p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  &#8377;53
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">+22% </span>vs
                last month
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm  font-light capitalize text-blue-600 ">
                  Market Value
                </p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  &#8377;56
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">+3% </span>vs
                last month
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize text-blue-600">
                  Total sellers
                </p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  200
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">+22% </span>vs
                last month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly px-20">
        {/* CHARTS */}
        <div className="lg:w-[600px] gap-5 ml-12">
          <LineChart />
        </div>

        {/* News Feed */}
        <div className="w-1/2 my-5 max-w-xs rounded-xl px-6 py-10 text-gray-600 shadow">
          <div className="mb-5 w-30 text-center rounded-md bg-blue-100 px-2 py-1 text-md font-medium text-blue-700">
            News Feed
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <div className="flex flex-row gap-4">
                <Image
                  alt="FaceUI"
                  src={gifImage}
                  className="h-5 w-5 rounded-full"
                />
                <h6 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h6>
              </div>
            </a>

            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <div className="flex flex-row gap-4">
                <Image
                  alt="FaceUI"
                  src={gifImage}
                  className="h-5 w-5 rounded-full"
                />
                <h6 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h6>
              </div>
            </a>
          </div>

          <button className="flex items-center mt-5 space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
            <span> View All </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-4 h-7 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Table UI */}
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700">User Accounts</h2>
            <span className="text-xs text-gray-500">
              View accounts of registered users
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-10 space-x-8 lg:ml-40">
              <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
                CSV
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Full Name</th>
                  <th className="px-5 py-3">User Role</th>
                  <th className="px-5 py-3">Created at</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">3</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face1}
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Besique Monroe</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Administrator</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">7</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face2}
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">James Cavier</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Author</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">12</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face3}
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Elvis Son</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">
                      Suspended
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">66</p>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face4}
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Dana White</p>
                      </div>
                    </div>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Administrator</p>
                  </td>
                  <td className="bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">
                      Inactive
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">12</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face5}
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Elvis Son</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">
                      Suspended
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span className="text-xs text-gray-600 sm:text-sm">
              {" "}
              Showing 1 to 5 of 12 Entries{" "}
            </span>
            <div className="mt-2 inline-flex sm:mt-0">
              <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Prev
              </button>
              <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
};
const spinnerStyle = css`
  margin: auto; /* Center the spinner horizontally */
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Center the spinner vertically */
`;