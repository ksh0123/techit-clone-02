import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Banner from "./components/Banner";
import KdtSection from "./components/KdtSection";
import ScheduleSection from "./components/ScheduleSection";
import AlarmBanner from "./components/AlarmBanner";
import OnboardingClass from "./components/OnboardingClass";
import EducationSection from "./components/EducationSection";

const App = () => {
  return (
    <div className="font-pretendard text-techit-gray-300">
      <TopBanner />
      <Header />
      <Banner />
      <KdtSection />
      <ScheduleSection />
      <AlarmBanner />
      <OnboardingClass />
      <EducationSection />s
      <footer className="mt-40 max-w-screen-xl mx-auto bg-gray-100 h-[418px]">
        Footer
      </footer>
    </div>
  );
};

export default App;
