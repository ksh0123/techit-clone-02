import OnboardingCard from "./OnboardingCard";

const classData = [
  {
    title: "[프론트엔드] 사이트 기본 구조의 이해",
    desc: "개발 입문자를 위한 웹 사이트 제작의 정석",
    image: "thumbnail_2_1_frontend",
    keywords: ["HTML", "CSS", "JavaScript"],
    salePrice: "37,620원",
    originalPrice: "376,200원",
  },
  {
    title: "[백엔드] Java 첫걸음 시작하기",
    desc: "딱 하나만 개발을 배운다면 이것! 대세 언어 Java",
    image: "thumbnail_2_1_backend_java",
    keywords: ["Java", "Spring Boot"],
    salePrice: "37,190원",
    originalPrice: "321,860원",
  },
  {
    title: "[백엔드] Python 첫걸음 시작하기",
    desc: "내 입맛에 맞는 자동화 프로그램 만들기",
    image: "thumbnail_2_1_backend_python",
    keywords: ["Python", "Django"],
    salePrice: "37,620원",
    originalPrice: "376,200원",
  },
  {
    title: "[데이터분석] 실무에 필요한 데이터 분석&시각화",
    desc: "조사와 분석이 일상인 직장인들의 바이블, Python 데이터 분석 강의",
    image: "thumbnail_2_1_data",
    keywords: ["Pandas", "NumPy", "Python"],
    salePrice: "49,000원",
    originalPrice: "490,000원",
  },
  {
    title: "[블록체인] 나만의 NFT 생성부터 판매까지",
    desc: "화제의 블록체인 스킬을 내 손으로 재현!",
    image: "thumbnail_2_1_blockchain",
    keywords: ["Solidity", "EVM", "Remix IDE"],
    salePrice: "49,000원",
    originalPrice: "490,000원",
  },
];

const OnboardingClass = () => {
  return (
    <section className="mt-10 lg:mt-20">
      <div class="mx-4 max-w-7xl space-y-4 px-0 md:mx-auto md:px-6 lg:space-y-10">
        <div className="flex items-center justify-between lg:items-end">
          <div>
            <p className="mb-1 text-techit-main font-semibold hidden text-base lg:block">
              테킷 온보딩 트랙
            </p>
            <h2 className="flex font-semibold text-2xl">
              K-Digital 기초역량훈련 클래스
            </h2>
          </div>
          <div className="flex items-center">
            <span className="mr-1 text-xs font-semibold md:text-sm">
              자세히 보기
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="16"
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
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
          {classData.map((v, i) => (
            <OnboardingCard
              key={i}
              title={v.title}
              desc={v.desc}
              image={v.image}
              keywords={v.keywords}
              salePrice={v.salePrice}
              originalPrice={v.originalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingClass;
