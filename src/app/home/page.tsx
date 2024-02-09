function Page() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center font-['Inter']">
      <div className="w-[35%] text-2xl p-2 h-[650px] overflow-y-scroll no-scrollbar">
        <p className="text-sm font-semibold text-center">@rinaldi600</p>
        <div className="w-full flex bg-[#162329] h-[190px] mt-3 rounded-md">
          <p className="font-bold self-end text-base">@rinaldi600</p>
        </div>
        <div className="w-full h-[120px] p-2 rounded-md bg-[#0E191F] mt-5">
          <div className="flex justify-between">
            <p className="font-bold text-sm">About</p>
            <button>
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
          </div>
          <p className="text-wrap text-[#8B9193] text-base w-[70%] mt-3">
            Add in your your to help others know you better
          </p>
        </div>
        <div className="w-full h-[120px] p-2 rounded-md bg-[#0E191F] mt-5">
          <div className="flex justify-between">
            <p className="font-bold text-sm">Interest</p>
            <button>
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
          </div>
          <p className="text-wrap text-[#8B9193] text-base w-[70%] mt-3">
            Add in your interest to find a better match
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
