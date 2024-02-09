"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function Page() {
  const refPassword = useRef<HTMLInputElement | null>(null);
  const refConfirmPassword = useRef<HTMLInputElement | null>(null);

  const [isHidePassword, setHidePassword] = useState<boolean>(false);
  const [isHideConfirmPassword, setHideConfirmPassword] =
    useState<boolean>(false);

  const [opacity, setOpacity] = useState<boolean>(false);

  const showPassword = (
    e: React.FormEvent<HTMLInputElement>,
    inputName: string
  ) => {
    if (inputName == "password") {
      if (isHidePassword) {
        e.currentTarget.type = "text";
      } else {
        e.currentTarget.type = "password";
      }
    } else if (inputName == 'passwordConfirm') {
        e.currentTarget.type = "text";
      } else {
        e.currentTarget.type = "password";
      }
  };

  useEffect(() => {
    refPassword?.current?.focus();
  }, [isHidePassword]);

  
  useEffect(() => {
    refConfirmPassword?.current?.focus();
  }, [isHideConfirmPassword]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center font-['Inter']">
      <div className="w-[35%] text-2xl">
        <h1 className="font-bold pb-5">Register</h1>

        <input
          autoComplete="off"
          type="text"
          name="email"
          className="w-[100%] text-white outline-none border-none p-2 bg-[#21363B] h-[51px] rounded-md text-xs"
          placeholder="Enter Email"
        />

        <input
          autoComplete="off"
          type="text"
          name="email"
          className="w-[100%] text-white outline-none border-none mt-5 p-2 bg-[#21363B] h-[51px] rounded-md text-xs"
          placeholder="Create Username"
        />

        <div className="w-full mt-5 relative">
          <div className="grid p-2 absolute inset-y-0 right-0 items-center justify-center">
            <button>
              <svg
                onClick={
                  isHidePassword
                    ? () => setHidePassword(false)
                    : () => setHidePassword(true)
                }
                width="20"
                height="17"
                className="cursor-pointer"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.59484 0.176057C3.50496 0.0705051 3.37949 0.00739455 3.24602 0.000609393C3.11255 -0.00617576 2.98203 0.0439201 2.88316 0.139877C2.78429 0.235833 2.72517 0.36979 2.71882 0.512279C2.71246 0.654767 2.75939 0.794115 2.84927 0.899667L4.61153 2.98005C1.45979 4.96093 0.104202 8.13577 0.0448949 8.28049C0.0153211 8.3485 0 8.42259 0 8.49757C0 8.57256 0.0153211 8.64664 0.0448949 8.71465C0.0787846 8.78701 0.781996 10.4604 2.35787 12.1337C3.93374 13.8071 6.32297 15.5528 10 15.5528C11.5375 15.5626 13.0584 15.2138 14.4565 14.5307L16.4052 16.8191C16.4518 16.8756 16.5091 16.921 16.5734 16.9522C16.6377 16.9833 16.7074 16.9996 16.7779 17C16.9043 17.0009 17.026 16.949 17.1168 16.8553C17.1673 16.8088 17.2083 16.7518 17.2375 16.6878C17.2667 16.6238 17.2834 16.5542 17.2865 16.4831C17.2897 16.4121 17.2793 16.341 17.256 16.2744C17.2326 16.2078 17.1968 16.1469 17.1507 16.0955L3.59484 0.176057ZM7.72092 6.62523L11.5335 11.1026C10.9612 11.4835 10.2819 11.6379 9.61396 11.5391C8.94598 11.4402 8.33165 11.0943 7.87802 10.5616C7.42439 10.0288 7.16021 9.34308 7.1315 8.62378C7.10279 7.90448 7.31138 7.19722 7.72092 6.62523ZM10 14.4674C7.33966 14.4674 5.01821 13.4362 3.10344 11.4011C2.29604 10.547 1.61345 9.56823 1.07853 8.49757C1.44285 7.75587 2.78149 5.31369 5.31475 3.80315L7.02618 5.81117C6.41824 6.58181 6.09287 7.56178 6.1105 8.56914C6.12812 9.5765 6.48753 10.5428 7.122 11.2887C7.75647 12.0345 8.6229 12.5093 9.56042 12.6248C10.4979 12.7403 11.4429 12.4886 12.2198 11.9166L13.7279 13.6895C12.5462 14.2115 11.2788 14.476 10 14.4674ZM19.9551 8.71465C19.9212 8.8051 19.074 10.795 17.1677 12.6221C17.0741 12.7102 16.9535 12.7585 16.8288 12.7578C16.757 12.7571 16.6862 12.7406 16.6206 12.7095C16.555 12.6784 16.4961 12.6333 16.4475 12.5769C16.4028 12.5236 16.3684 12.4613 16.3463 12.3937C16.3242 12.3261 16.3149 12.2546 16.3188 12.1831C16.3228 12.1116 16.3399 12.0417 16.3693 11.9773C16.3986 11.913 16.4396 11.8555 16.4899 11.8081C17.4747 10.8641 18.2976 9.74376 18.9215 8.49757C18.3866 7.42691 17.704 6.44816 16.8966 5.59409C14.9818 3.55893 12.6603 2.52779 10 2.52779C9.44081 2.52542 8.88244 2.57384 8.33093 2.67251C8.20308 2.68554 8.07535 2.64643 7.97341 2.56303C7.87148 2.47963 7.80288 2.35813 7.78142 2.22295C7.75996 2.08777 7.78722 1.94893 7.85773 1.83432C7.92823 1.71972 8.03675 1.63786 8.16148 1.60519C8.76892 1.49561 9.38396 1.44115 10 1.44237C13.677 1.44237 16.1849 3.29663 17.6421 4.86143C19.0994 6.42624 19.9212 8.20813 19.9551 8.28049C19.9847 8.3485 20 8.42259 20 8.49757C20 8.57256 19.9847 8.64664 19.9551 8.71465ZM10.5422 5.4765C10.4097 5.45011 10.2923 5.36858 10.2161 5.24984C10.1398 5.1311 10.1108 4.98488 10.1356 4.84334C10.1603 4.7018 10.2366 4.57655 10.3479 4.49513C10.4591 4.4137 10.5961 4.38279 10.7286 4.40918C11.5574 4.58053 12.3121 5.03334 12.88 5.70004C13.448 6.36674 13.7989 7.21161 13.8804 8.10863C13.8922 8.25124 13.8507 8.39305 13.765 8.50317C13.6793 8.61329 13.5563 8.6828 13.4229 8.69656H13.372C13.2465 8.69705 13.1254 8.64707 13.0327 8.55657C12.9401 8.46608 12.8828 8.34168 12.8722 8.20813C12.812 7.54531 12.5526 6.92106 12.1327 6.4287C11.7127 5.93633 11.1548 5.60229 10.5422 5.4765Z"
                  fill="url(#paint0_linear_11_2644)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11_2644"
                    x1="-3.5"
                    y1="14"
                    x2="24.6814"
                    y2="4.54055"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0237305" stop-color="#94783E" />
                    <stop offset="0.216904" stop-color="#F3EDA6" />
                    <stop offset="0.329505" stop-color="#F8FAE5" />
                    <stop offset="0.486109" stop-color="#FFE2BE" />
                    <stop offset="0.723574" stop-color="#D5BE88" />
                    <stop offset="0.809185" stop-color="#F8FAE5" />
                    <stop offset="0.902849" stop-color="#D5BE88" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>

          <input
            onFocus={(e) => showPassword(e, "password")}
            ref={refPassword}
            type="password"
            name="password"
            className="w-[100%] text-white outline-none border-none p-2 bg-[#21363B] h-[51px] rounded-md text-xs"
            placeholder="Create Password"
          />
        </div>

        <div className="w-full mt-5 relative">
          <div className="grid p-2 absolute inset-y-0 right-0 items-center justify-center">
            <button>
              <svg
                onClick={
                  isHideConfirmPassword
                    ? () => setHideConfirmPassword(false)
                    : () => setHideConfirmPassword(true)
                }
                width="20"
                height="17"
                className="cursor-pointer"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.59484 0.176057C3.50496 0.0705051 3.37949 0.00739455 3.24602 0.000609393C3.11255 -0.00617576 2.98203 0.0439201 2.88316 0.139877C2.78429 0.235833 2.72517 0.36979 2.71882 0.512279C2.71246 0.654767 2.75939 0.794115 2.84927 0.899667L4.61153 2.98005C1.45979 4.96093 0.104202 8.13577 0.0448949 8.28049C0.0153211 8.3485 0 8.42259 0 8.49757C0 8.57256 0.0153211 8.64664 0.0448949 8.71465C0.0787846 8.78701 0.781996 10.4604 2.35787 12.1337C3.93374 13.8071 6.32297 15.5528 10 15.5528C11.5375 15.5626 13.0584 15.2138 14.4565 14.5307L16.4052 16.8191C16.4518 16.8756 16.5091 16.921 16.5734 16.9522C16.6377 16.9833 16.7074 16.9996 16.7779 17C16.9043 17.0009 17.026 16.949 17.1168 16.8553C17.1673 16.8088 17.2083 16.7518 17.2375 16.6878C17.2667 16.6238 17.2834 16.5542 17.2865 16.4831C17.2897 16.4121 17.2793 16.341 17.256 16.2744C17.2326 16.2078 17.1968 16.1469 17.1507 16.0955L3.59484 0.176057ZM7.72092 6.62523L11.5335 11.1026C10.9612 11.4835 10.2819 11.6379 9.61396 11.5391C8.94598 11.4402 8.33165 11.0943 7.87802 10.5616C7.42439 10.0288 7.16021 9.34308 7.1315 8.62378C7.10279 7.90448 7.31138 7.19722 7.72092 6.62523ZM10 14.4674C7.33966 14.4674 5.01821 13.4362 3.10344 11.4011C2.29604 10.547 1.61345 9.56823 1.07853 8.49757C1.44285 7.75587 2.78149 5.31369 5.31475 3.80315L7.02618 5.81117C6.41824 6.58181 6.09287 7.56178 6.1105 8.56914C6.12812 9.5765 6.48753 10.5428 7.122 11.2887C7.75647 12.0345 8.6229 12.5093 9.56042 12.6248C10.4979 12.7403 11.4429 12.4886 12.2198 11.9166L13.7279 13.6895C12.5462 14.2115 11.2788 14.476 10 14.4674ZM19.9551 8.71465C19.9212 8.8051 19.074 10.795 17.1677 12.6221C17.0741 12.7102 16.9535 12.7585 16.8288 12.7578C16.757 12.7571 16.6862 12.7406 16.6206 12.7095C16.555 12.6784 16.4961 12.6333 16.4475 12.5769C16.4028 12.5236 16.3684 12.4613 16.3463 12.3937C16.3242 12.3261 16.3149 12.2546 16.3188 12.1831C16.3228 12.1116 16.3399 12.0417 16.3693 11.9773C16.3986 11.913 16.4396 11.8555 16.4899 11.8081C17.4747 10.8641 18.2976 9.74376 18.9215 8.49757C18.3866 7.42691 17.704 6.44816 16.8966 5.59409C14.9818 3.55893 12.6603 2.52779 10 2.52779C9.44081 2.52542 8.88244 2.57384 8.33093 2.67251C8.20308 2.68554 8.07535 2.64643 7.97341 2.56303C7.87148 2.47963 7.80288 2.35813 7.78142 2.22295C7.75996 2.08777 7.78722 1.94893 7.85773 1.83432C7.92823 1.71972 8.03675 1.63786 8.16148 1.60519C8.76892 1.49561 9.38396 1.44115 10 1.44237C13.677 1.44237 16.1849 3.29663 17.6421 4.86143C19.0994 6.42624 19.9212 8.20813 19.9551 8.28049C19.9847 8.3485 20 8.42259 20 8.49757C20 8.57256 19.9847 8.64664 19.9551 8.71465ZM10.5422 5.4765C10.4097 5.45011 10.2923 5.36858 10.2161 5.24984C10.1398 5.1311 10.1108 4.98488 10.1356 4.84334C10.1603 4.7018 10.2366 4.57655 10.3479 4.49513C10.4591 4.4137 10.5961 4.38279 10.7286 4.40918C11.5574 4.58053 12.3121 5.03334 12.88 5.70004C13.448 6.36674 13.7989 7.21161 13.8804 8.10863C13.8922 8.25124 13.8507 8.39305 13.765 8.50317C13.6793 8.61329 13.5563 8.6828 13.4229 8.69656H13.372C13.2465 8.69705 13.1254 8.64707 13.0327 8.55657C12.9401 8.46608 12.8828 8.34168 12.8722 8.20813C12.812 7.54531 12.5526 6.92106 12.1327 6.4287C11.7127 5.93633 11.1548 5.60229 10.5422 5.4765Z"
                  fill="url(#paint0_linear_11_2644)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11_2644"
                    x1="-3.5"
                    y1="14"
                    x2="24.6814"
                    y2="4.54055"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0237305" stop-color="#94783E" />
                    <stop offset="0.216904" stop-color="#F3EDA6" />
                    <stop offset="0.329505" stop-color="#F8FAE5" />
                    <stop offset="0.486109" stop-color="#FFE2BE" />
                    <stop offset="0.723574" stop-color="#D5BE88" />
                    <stop offset="0.809185" stop-color="#F8FAE5" />
                    <stop offset="0.902849" stop-color="#D5BE88" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>

          <input
            onFocus={(e) => showPassword(e, "passwordConfirm")}
            ref={refConfirmPassword}
            type="password"
            name="password"
            className="w-[100%] text-white outline-none border-none p-2 bg-[#21363B] h-[51px] rounded-md text-xs"
            placeholder="Confirm Password"
          />
        </div>

        <button
          onMouseLeave={() => setOpacity(false)}
          onMouseEnter={() => setOpacity(true)}
          className={`w-[100%] shadow-[0_2px_8px_-0px_#62CDCB] ${
            opacity ? "opacity-100" : "opacity-50"
          } bg-gradient-to-r overflow-hidden cursor-pointer from-[#62CDCB] to-[#4599DB] text-white text-base outline-none mt-5 font-bold border-none p-2 h-[51px] rounded-md`}
        >
          Register
        </button>

        <div className="text-sm mt-5 text-center">
          Have an account?
          <Link href={"/"}>
            <p className="gradient-underline text-linear-gradient inline-block text-transparent bg-clip-text">
              &nbsp;Login here
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
