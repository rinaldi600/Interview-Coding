"use client";

import { InputText } from "../InputText/InputText";
import { useState } from "react";

export default function About() {
  const [editProfile, isEditProfile] = useState<boolean>(false);

  return (
    <div className={`w-full ${editProfile ? 'h-[320px]' : 'h-[120px]'} overflow-y-scroll no-scrollbar p-2 rounded-md bg-[#0E191F] mt-5`}>
      <div className="flex justify-between">
        <p className="font-bold text-sm">About</p>
        <button
          onClick={() => isEditProfile(true)}
          className={`${editProfile ? "hidden" : ""}`}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.39254 2.55001L3.57712 8.70542C3.35754 8.93917 3.14504 9.39959 3.10254 9.71834L2.84045 12.0133C2.74837 12.8421 3.34337 13.4088 4.16504 13.2671L6.44587 12.8775C6.76462 12.8208 7.21087 12.5871 7.43045 12.3463L13.2459 6.19084C14.2517 5.12834 14.705 3.91709 13.1396 2.43667C11.5813 0.970423 10.3984 1.48751 9.39254 2.55001Z"
              stroke="white"
              stroke-width="1.0625"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.422 3.57709C8.72658 5.53209 10.3132 7.02667 12.2824 7.225"
              stroke="white"
              stroke-width="1.0625"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.125 15.5833H14.875"
              stroke="white"
              stroke-width="1.0625"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => isEditProfile(false)}
          className={`${editProfile ? '' : 'hidden'} text-xs text-linear-gradient inline-block text-transparent bg-clip-text`}
        >
          Save & Update
        </button>
      </div>
      <p className={`${editProfile ? "hidden" : ""} text-wrap text-[#8B9193] text-base w-[70%] mt-3`}>
        Add in your interest to find a better match
      </p>
      <div className={`${editProfile ? "flex" : "hidden"} gap-2 items-center`}>
        <div className="w-[57px] h-[57px] flex items-center justify-center bg-[#212B31] rounded-md mt-3 mb-3">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <p className="text-xs font-medium">Add Image</p>
      </div>
      <div className={`${editProfile ? "flex" : "hidden"}`}>
        <table className="w-full">
          <tbody>
            <tr>
              <td>
                <label
                  htmlFor="name"
                  className="font-medium text-xs text-[#5E6569]"
                >
                  Display name :
                </label>
              </td>
              <td>
                <InputText
                  id="name"
                  autoComplete="off"
                  type="text"
                  name="email"
                  placeholder="Enter Name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="gender"
                  className="font-medium text-xs text-[#5E6569]"
                >
                  Gender :
                </label>
              </td>
              <td>
                <select
                  name="gender"
                  id="gender"
                  className="w-[80%] text-white outline-none border-none p-2 bg-[#21363B] h-[36px] rounded-md text-xs"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="birthday"
                  className="font-medium text-xs text-[#5E6569]"
                >
                  Birthday :
                </label>
              </td>
              <td>
                <InputText
                  id="birthday"
                  autoComplete="off"
                  type="date"
                  name="birthday"
                  placeholder="DD MM YYYY"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="zodiac"
                  className="font-medium text-xs text-[#5E6569]"
                >
                  Zodiac :
                </label>
              </td>
              <td>
                <InputText
                  id="zodiac"
                  autoComplete="off"
                  type="text"
                  name="zodiac"
                  placeholder="--"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="horoscope"
                  className="font-medium text-xs text-[#5E6569]"
                >
                  Horoscope :
                </label>
              </td>
              <td>
                <InputText
                  id="horoscope"
                  autoComplete="off"
                  type="text"
                  name="horoscope"
                  placeholder="--"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="height"
                  className="font-medium text-xs text-[#5E6569]"
                >
                  Height :
                </label>
              </td>
              <td>
                <InputText
                  id="height"
                  autoComplete="off"
                  type="text"
                  name="height"
                  placeholder="Add Height"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label
                  htmlFor="weight"
                  className="font-medium text-xs text-[#5E6569]"
                >
                  Weight :
                </label>
              </td>
              <td>
                <InputText
                  id="weight"
                  autoComplete="off"
                  type="text"
                  name="weight"
                  placeholder="Add Weight"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
