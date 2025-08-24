import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import TeamSection from '@/components/TeamSection';
import VideoSection from '@/components/VideoSection';
import UPISection from '@/components/UPISection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EventsSection />
        <TeamSection />
        <VideoSection />
        <UPISection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
