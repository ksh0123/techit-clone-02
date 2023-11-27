const AlarmBanner = () => {
  return (
    <section className="mt-10 overflow-hidden bg-[#F0F4FA] md:mt-20">
      <div className="h-full">
        <div className="relative h-[206px] bg-center bg-cover max-w-7xl cursor-pointer px-4 md:mx-auto md:px-6">
          <div className="absolute left-0 top-0 h-full w-full">
            <img
              src="./images/banner_1.webp"
              className="absolute top-0 w-full h-full object-cover"
              alt="사전알림"
            />
          </div>
          <div className="absolute left-0 top-0 z-0 h-full w-full"></div>
          <div className="relative flex flex-col h-full pt-4 md:justify-center">
            <h3 class="mb-1 text-xs font-semibold text-[#072C56] lg:mb-2 lg:text-sm xl:text-base">
              테킷 스쿨 사전알림
            </h3>
            <p class="mb-4 text-lg font-semibold md:mb-2 lg:mb-4 xl:mb-5 xl:text-2xl">
              <div>기다리는 스쿨이 있으신가요?</div>
              <div>가장 먼저 모집 소식을 보내드릴게요</div>
            </p>
            <div class="flex items-center">
              <span class="text-xs font-semibold text-gray-500 lg:text-sm">
                더 알아보기
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="ml-1 w-[14px] text-gray-500 lg:w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlarmBanner;
