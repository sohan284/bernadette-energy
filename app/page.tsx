import EnergyLandingHero from "@/components/common/EnergyLandingHero";
import MapSection from "@/components/common/MapSection";
import Footer from "@/components/common/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      {/* New Hero Section */}
      <EnergyLandingHero />

      {/* Map Section (Now contains the pipeline image) */}
      <MapSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
