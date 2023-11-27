import EducationCard from "./EducationCard";

const educationData = [
  {
    title: "테킷 KDT 스쿨",
    desc: "100% 전액지원 받고 테킷 KDT스쿨에서\n커리어 목표를 달성해보세요.",
    image: "home_card_600_kdt",
  },
  {
    title: "온보딩 트랙",
    desc: "교육비 지원받고 기본기도 쌓고!\n커리어 완성의 첫 시작을 함께하세요.",
    image: "home_card_600_kdc",
  },
  {
    title: "스타트업 스테이션",
    desc: "IT스타트업 창업 시작을 위한\n창업 온보딩 교육 함께 도전해요.",
    image: "home_card_600_sus",
  },
];

const EducationSection = () => {
  return (
    <section className="mt-10 lg:mt-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between lg:items-end">
          <div className="py-10">
            <p className="mb-2 text-techit-main font-semibold hidden text-base lg:block">
              모든 교육 경험
            </p>
            <h2 className="flex font-bold text-2xl">
              테킷이 두드리는 새로운 교육
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          {educationData.map((v, i) => (
            <EducationCard
              key={i}
              title={v.title}
              desc={v.desc}
              image={v.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
