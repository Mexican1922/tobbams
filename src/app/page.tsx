import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import CorporateTrainings from "@/components/CorporateTrainings";
import PersonalisedTraining from "@/components/PersonalisedTraining";
import CapacityDevelopment from "@/components/CapacityDevelopment";
import ManagementDevelopment from "@/components/ManagementDevelopment";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LearningManagement />
        <CorporateTrainings />
        <PersonalisedTraining />
        <CapacityDevelopment />
        <ManagementDevelopment />
        <TransformationHub />
        <TrainingConsultant />
        <CTABanner />
        <Testimonials />
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}
