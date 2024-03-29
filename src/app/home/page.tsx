"use client";
import About from "@/app/home/Component/About/About";
import Interest from "@/app/home/Component/Interest/Interest";

import { useRouter } from 'next/navigation'

function Page() {

  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex justify-center items-center font-['Inter']">
      <div className="w-[35%] text-2xl p-2 h-[650px] overflow-y-scroll no-scrollbar">
        <div className="flex justify-center gap-2 relative">
          <div className="absolute flex justify-normal items-center inset-y-0 left-0">
            <button  onClick={() => router.push('/')} className="text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              Back
            </button>
          </div>
          <p className="text-sm font-semibold text-center">@rinaldi600</p>
        </div>
        <div className="w-full flex bg-[#162329] p-4 h-[190px] mt-3 rounded-md">
          <p className="font-bold self-end text-base">@rinaldi600</p>
        </div>
        <div>
          <About />
        </div>
        <div>
          <Interest />
        </div>
      </div>
    </div>
  );
}

export default Page;
