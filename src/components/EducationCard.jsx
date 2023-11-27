const EducationCard = ({ title, desc, image }) => {
  return (
    <div className="w-[604px] h-[310px] relative lg:p-10 cursor-pointer">
      <div className="absolute left-0 top-0 h-full w-full">
        <img
          src={`./images/${image}.webp`}
          className="absolute top-0 w-full h-full object-cover rounded-2xl"
          alt="신규교육"
        />
      </div>
      <div className="absolute flex flex-col h-full w-1/2 pr-10 pt-1 md:justify-top">
        <h3 class="mb-1 text-2xl font-bold lg:mb-2">{title}</h3>
        <p class="mb-4 text-base whitespace-pre md:mb-2 lg:mb-4 xl:mb-5">
          <div>{desc}</div>
        </p>
        <div class="flex items-center">
          <span class="text-xs font-semibold text-neutral-500 lg:text-sm">
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
  );
};

export default EducationCard;
