"use client"
import Image from "next/legacy/image"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ETImage = ({ img1, img2, img3 }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  console.log(img1);
  return (
    <div data-aos="zoom-in-right" data-aos-duration="1000" className="w-full px-4 lg:w-6/12 mb-10">
      <div className="flex items-center -mx-3 sm:-mx-4">
        <div className="w-full px-3 sm:px-4 xl:w-1/2">
          <div className="py-3 sm:py-4">
            <Image
              width="350"
              height="350"
              src={img1}
              alt="Social worker"
              className="w-50 rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-gray-100"
            />
          </div>
          <div className="py-3 sm:py-4">
            <Image
              width="350"
              height="350"
              src={img2}
              alt="Social Service"
              className="w-50 rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-gray-100"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:px-4 xl:w-1/2">
          <div className="relative z-10 my-4">
            <Image
              width="350"
              height="350"
              src={img3}
              alt="Connect"
              className="w-50 rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-gray-100"
            />
            <span className="absolute -right-7 -bottom-7 z-[-2]">
              <svg
                width={134}
                height={106}
                viewBox="0 0 134 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="1.66667"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 1.66667 104)"
                  fill="#2098ff"
                />
                <circle
                  cx="16.3333"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 16.3333 104)"
                  fill="#2098ff"
                />
                <circle
                  cx={31}
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 31 104)"
                  fill="#2098ff"
                />
                <circle
                  cx="45.6667"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 45.6667 104)"
                  fill="#2098ff"
                />
                <circle
                  cx="60.3334"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 60.3334 104)"
                  fill="#2098ff"
                />
                <circle
                  cx="88.6667"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 88.6667 104)"
                  fill="#2098ff"
                />
                <circle
                  cx="117.667"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 117.667 104)"
                  fill="#2098ff"
                />
                <circle
                  cx="74.6667"
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 74.6667 104)"
                  fill="#2098ff"
                />
                <circle
                  cx={103}
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 103 104)"
                  fill="#2098ff"
                />
                <circle
                  cx={132}
                  cy={104}
                  r="1.66667"
                  transform="rotate(-90 132 104)"
                  fill="#2098ff"
                />
                <circle
                  cx="1.66667"
                  cy="89.3333"
                  r="1.66667"
                  transform="rotate(-90 1.66667 89.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="16.3333"
                  cy="89.3333"
                  r="1.66667"
                  transform="rotate(-90 16.3333 89.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx={31}
                  cy="89.3333"
                  r="1.66667"
                  transform="rotate(-90 31 89.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="45.6667"
                  cy="89.3333"
                  r="1.66667"
                  transform="rotate(-90 45.6667 89.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="60.3333"
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 60.3333 89.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx="88.6667"
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 88.6667 89.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx="117.667"
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 117.667 89.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx="74.6667"
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 74.6667 89.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx={103}
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 103 89.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx={132}
                  cy="89.3338"
                  r="1.66667"
                  transform="rotate(-90 132 89.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx="1.66667"
                  cy="74.6673"
                  r="1.66667"
                  transform="rotate(-90 1.66667 74.6673)"
                  fill="#2098ff"
                />
                <circle
                  cx="1.66667"
                  cy="31.0003"
                  r="1.66667"
                  transform="rotate(-90 1.66667 31.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="16.3333"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 16.3333 74.6668)"
                  fill="#2098ff"
                />
                <circle
                  cx="16.3333"
                  cy="31.0003"
                  r="1.66667"
                  transform="rotate(-90 16.3333 31.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx={31}
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 31 74.6668)"
                  fill="#2098ff"
                />
                <circle
                  cx={31}
                  cy="31.0003"
                  r="1.66667"
                  transform="rotate(-90 31 31.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="45.6667"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 45.6667 74.6668)"
                  fill="#2098ff"
                />
                <circle
                  cx="45.6667"
                  cy="31.0003"
                  r="1.66667"
                  transform="rotate(-90 45.6667 31.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="60.3333"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 60.3333 74.6668)"
                  fill="#2098ff"
                />
                <circle
                  cx="60.3333"
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 60.3333 30.9998)"
                  fill="#2098ff"
                />
                <circle
                  cx="88.6667"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 88.6667 74.6668)"
                  fill="#2098ff"
                />
                <circle
                  cx="88.6667"
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 88.6667 30.9998)"
                  fill="#2098ff"
                />
                <circle
                  cx="117.667"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 117.667 74.6668)"
                  fill="#2098ff"
                />
                <circle
                  cx="117.667"
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 117.667 30.9998)"
                  fill="#2098ff"
                />
                <circle
                  cx="74.6667"
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 74.6667 74.6668)"
                  fill="#2098ff"
                />
                <circle
                  cx="74.6667"
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 74.6667 30.9998)"
                  fill="#2098ff"
                />
                <circle
                  cx={103}
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 103 74.6668)"
                  fill="#2098ff"
                />
                <circle
                  cx={103}
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 103 30.9998)"
                  fill="#2098ff"
                />
                <circle
                  cx={132}
                  cy="74.6668"
                  r="1.66667"
                  transform="rotate(-90 132 74.6668)"
                  fill="#2098ff"
                />
                <circle
                  cx={132}
                  cy="30.9998"
                  r="1.66667"
                  transform="rotate(-90 132 30.9998)"
                  fill="#2098ff"
                />
                <circle
                  cx="1.66667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 1.66667 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="1.66667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 1.66667 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="16.3333"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 16.3333 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="16.3333"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 16.3333 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx={31}
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 31 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx={31}
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 31 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="45.6667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 45.6667 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="45.6667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 45.6667 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="60.3333"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 60.3333 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="60.3333"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 60.3333 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="88.6667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 88.6667 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="88.6667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 88.6667 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="117.667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 117.667 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="117.667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 117.667 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="74.6667"
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 74.6667 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx="74.6667"
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 74.6667 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx={103}
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 103 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx={103}
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 103 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx={132}
                  cy="60.0003"
                  r="1.66667"
                  transform="rotate(-90 132 60.0003)"
                  fill="#2098ff"
                />
                <circle
                  cx={132}
                  cy="16.3333"
                  r="1.66667"
                  transform="rotate(-90 132 16.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="1.66667"
                  cy="45.3333"
                  r="1.66667"
                  transform="rotate(-90 1.66667 45.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="1.66667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 1.66667 1.66683)"
                  fill="#2098ff"
                />
                <circle
                  cx="16.3333"
                  cy="45.3333"
                  r="1.66667"
                  transform="rotate(-90 16.3333 45.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="16.3333"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 16.3333 1.66683)"
                  fill="#2098ff"
                />
                <circle
                  cx={31}
                  cy="45.3333"
                  r="1.66667"
                  transform="rotate(-90 31 45.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx={31}
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 31 1.66683)"
                  fill="#2098ff"
                />
                <circle
                  cx="45.6667"
                  cy="45.3333"
                  r="1.66667"
                  transform="rotate(-90 45.6667 45.3333)"
                  fill="#2098ff"
                />
                <circle
                  cx="45.6667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 45.6667 1.66683)"
                  fill="#2098ff"
                />
                <circle
                  cx="60.3333"
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 60.3333 45.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx="60.3333"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 60.3333 1.66683)"
                  fill="#2098ff"
                />
                <circle
                  cx="88.6667"
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 88.6667 45.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx="88.6667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 88.6667 1.66683)"
                  fill="#2098ff"
                />
                <circle
                  cx="117.667"
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 117.667 45.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx="117.667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 117.667 1.66683)"
                  fill="#2098ff"
                />
                <circle
                  cx="74.6667"
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 74.6667 45.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx="74.6667"
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 74.6667 1.66683)"
                  fill="#2098ff"
                />
                <circle
                  cx={103}
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 103 45.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx={103}
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 103 1.66683)"
                  fill="#2098ff"
                />
                <circle
                  cx={132}
                  cy="45.3338"
                  r="1.66667"
                  transform="rotate(-90 132 45.3338)"
                  fill="#2098ff"
                />
                <circle
                  cx={132}
                  cy="1.66683"
                  r="1.66667"
                  transform="rotate(-90 132 1.66683)"
                  fill="#2098ff"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ETImage