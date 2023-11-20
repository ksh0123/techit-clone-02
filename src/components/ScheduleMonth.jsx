import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";

const ScheduleMonth = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <button>
          <PrevIcon size="w-6 h-6" />
        </button>
        <span className="mx-2 text-2xl font-semibold">2023년 11월</span>
        <button>
          <NextIcon size="w-6 h-6" />
        </button>
      </div>
      <div className="mt-4 px-6 w-full">
        <div className="flex h-36 rounded-lg w-full border hover:shadow-lg mt-4">
          <div className="w-52">
            <img
              className="w-full h-full object-cover rounded-l-lg"
              src="./images/kdt_android.webp"
              alt="kdt_android"
            />
          </div>
          <div className="p-4 flex flex-col justify-center">
            <span className="w-fit text-sm font-semibold border py-1 px-2 rounded-[4px] text-[#059669] border-[#059669]">
              모집중
            </span>
            <h3>앱 스쿨 : Android</h3>
            <h5>앱 기초부터 앱 배포까지 실무에 능한 주니어 앱 개발자로 성장</h5>
            <div>23.11.01 ~ 23.11.30 까지</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMonth;
