"use client";
import { useRouter } from "next/navigation";
import { InputText } from "../home/Component/InputText/InputText";

function Page() {

  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex justify-center items-center font-['Inter']">
      <div className="w-[35%] text-2xl p-2 h-[650px] overflow-y-scroll no-scrollbar">
        <div className="flex justify-between gap-2">
          <div className="flex justify-normal items-center">
            <button onClick={() => router.push('/home')} className="text-sm font-semibold">
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
          <button className="text-sm font-semibold text-center">Save</button>
        </div>
        <div className="pt-10">
            <p className="font-bold text-sm text-linear-gradient">Tell everyone about yourself</p>
            <h1 className="text-xl font-bold mt-2 mb-2">What interest you?</h1>
            <InputText
                  id="interest"
                  autoComplete="off"
                  type="text"
                  name="interest"
                  placeholder=""
                />
        </div>
      </div>
    </div>
  );
}

export default Page;
