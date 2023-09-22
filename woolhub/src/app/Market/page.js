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
      <div class="flex align-center justify-center flex-wrap gap-x-12 gap-y-12 px-4 ml-12 py-20 lg:px-20 sm:px-8">
        <div class="flex w-72">
          <div class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div class="p-3">
              <div class="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div class="pt-1 text-right">
                <p class="text-sm font-light capitalize text-blue-600">
                  Pageviews
                </p>
                <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  $14,000
                </h4>
              </div>
            </div>
            <hr class="opacity-50" />
            <div class="p-4">
              <p class="font-light">
                <span class="text-sm font-bold text-green-600">+22% </span>vs
                last month
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72">
          <div class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div class="p-3">
              <div class="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div class="pt-1 text-right">
                <p class="text-sm  font-light capitalize text-blue-600 ">
                  Users
                </p>
                <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  $2,300
                </h4>
              </div>
            </div>
            <hr class="opacity-50" />
            <div class="p-4">
              <p class="font-light">
                <span class="text-sm font-bold text-green-600">+3% </span>vs
                last month
              </p>
            </div>
          </div>
        </div>
        <div class="flex w-72">
          <div class="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div class="p-3">
              <div class="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 text-center text-white shadow-lg">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div class="pt-1 text-right">
                <p class="text-sm font-light capitalize text-blue-600">Sales</p>
                <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  $5,360
                </h4>
              </div>
            </div>
            <hr class="opacity-50" />
            <div class="p-4">
              <p class="font-light">
                <span class="text-sm font-bold text-red-600">-3% </span>vs last
                month
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
        <div class="w-1/2 my-5 max-w-xs rounded-xl px-6 py-10 text-gray-600 shadow">
          <div class="mb-5 w-30 text-center rounded-md bg-blue-100 px-2 py-1 text-md font-medium text-blue-700">
            News Feed
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <div className="flex flex-row gap-4">
                <Image
                  alt="FaceUI"
                  src={gifImage}
                  class="h-5 w-5 rounded-full"
                />
                <h6 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h6>
              </div>
            </a>

            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <div className="flex flex-row gap-4">
                <Image
                  alt="FaceUI"
                  src={gifImage}
                  class="h-5 w-5 rounded-full"
                />
                <h6 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h6>
              </div>
            </a>
          </div>

          <button class="flex items-center mt-5 space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
            <span> View All </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mt-4 h-7 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
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
      <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div class="flex items-center justify-between pb-6">
          <div>
            <h2 class="font-semibold text-gray-700">User Accounts</h2>
            <span class="text-xs text-gray-500">
              View accounts of registered users
            </span>
          </div>
          <div class="flex items-center justify-between">
            <div class="ml-10 space-x-8 lg:ml-40">
              <button class="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
                CSV
              </button>
            </div>
          </div>
        </div>
        <div class="overflow-y-hidden rounded-lg border">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th class="px-5 py-3">ID</th>
                  <th class="px-5 py-3">Full Name</th>
                  <th class="px-5 py-3">User Role</th>
                  <th class="px-5 py-3">Created at</th>
                  <th class="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody class="text-gray-500">
                <tr>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">3</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face1}
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap">Besique Monroe</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Administrator</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">7</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face2}
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap">James Cavier</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Author</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">12</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face3}
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap">Elvis Son</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Editor</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">
                      Suspended
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">66</p>
                  </td>
                  <td class="bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face4}
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap">Dana White</p>
                      </div>
                    </div>
                  </td>
                  <td class="bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Administrator</p>
                  </td>
                  <td class="bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td class="bg-white px-5 py-5 text-sm">
                    <span class="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">
                      Inactive
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">12</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <Image
                          alt="FaceUI"
                          src={face5}
                          class="h-full w-full rounded-full"
                        />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap">Elvis Son</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Editor</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p class="whitespace-no-wrap">Sep 28, 2022</p>
                  </td>

                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">
                      Suspended
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span class="text-xs text-gray-600 sm:text-sm">
              {" "}
              Showing 1 to 5 of 12 Entries{" "}
            </span>
            <div class="mt-2 inline-flex sm:mt-0">
              <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
                Prev
              </button>
              <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
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
  margin: 0 auto; /* Center the spinner horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Center the spinner vertically */
`;