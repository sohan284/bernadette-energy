import SplitSection from "@/components/common/SplitSection";
import StatsSection from "@/components/common/StatsSection";
import ContactForm from "@/components/common/ContactForm";
import MapSection from "@/components/common/MapSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  const sharedBg = "/images/premium_refinery.png";
  const sharedBg2 = "/images/lifestyle.png";

  return (
    <main className="flex flex-col flex-1 pt-10">
      {/* About Section */}
      <SplitSection
        heading="Connecting Oil Refineries with End-Use Buyers"
        subheading="Your Trusted Partner in Oil and Gas Exploration Services"
        description="At US Oil Brokers, we specialize in uniting oil refineries with buyers for end-use distribution. With a focus on commodities brokerage, crude oil trading, and oil farming, we ensure seamless transactions for all parties involved."
        ctaText="Explore Our Services"
        bgImageSrc={sharedBg}
      />

      {/* Services Section (Inverted Content) */}
      <SplitSection

        heading="Advanced Solutions for Global Energy Logistics"
        subheading="Strategic Exploration and Distribution Excellence"
        description="Our comprehensive network and industry expertise allow us to navigate complex energy markets with precision. From offshore exploration support to large-scale refinery logistics, we provide the backbone for efficient energy flow worldwide."
        ctaText="Learn More About Us"
        bgImageSrc={sharedBg}
        reverse={true}
      />

      {/* Stats Section */}
      <StatsSection />
      <SplitSection
        id="about"
        heading="Oil Farming Expertise"
        description="Our mastery in oil farming techniques ensures a sustainable and reliable supply of oil products, meeting the needs of our diverse clientele."
        subheading="Industry Leadership"
        bgImageSrc={sharedBg2}
      />

      {/* Services Section (Inverted Content) */}
      <SplitSection
        heading="Commodities Brokerage"
        description="We facilitate seamless transactions between oil refineries and end-use buyers, ensuring fair deals and efficient distribution channels."
        subheading="Crude Oil Trading"
        bgImageSrc={sharedBg2}
        reverse={true}
      />

      {/* Contact Section */}
      <SplitSection
        id="contact"
        heading="Get in Touch"
        subheading="Connect with our global network of energy experts"
        bgImageSrc={sharedBg2}
      >
        <ContactForm />
      </SplitSection>

      {/* Map Section */}
      <MapSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
