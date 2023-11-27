import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Banner from "./components/Banner";
import KdtSection from "./components/KdtSection";
import ScheduleSection from "./components/ScheduleSection";
import AlarmBanner from "./components/AlarmBanner";
import OnboardingClass from "./components/OnboardingClass";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

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
      <EducationSection />
      <Footer />
    </div>
  );
};

export default App;
