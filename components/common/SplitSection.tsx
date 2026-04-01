interface SplitSectionProps {
  id?: string;
  heading: string;
  subheading: string;
  description?: string;
  ctaText?: string;
  bgImageSrc: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

const SplitSection = ({
  id,
  heading,
  subheading,
  description,
  ctaText,
  bgImageSrc,
  reverse = false,
  children,
}: SplitSectionProps) => {
  return (
    <section
      id={id}
      className={`relative min-h-[700px] flex overflow-hidden scroll-mt-24 ${reverse ? "text-gray-900 pt-56 md:pt-0" : ""}`}
      style={{
        backgroundImage: `url(${bgImageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className={`z-10 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : "flex-row"}`}>
        {/* Content Side with solid background */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 py-10 md:px-14 lg:px-20">
          <div className="max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 leading-tight mb-4">
              {heading}
            </h2>

            <div className="w-full h-px bg-gray-200 my-8"></div>

            <h3 className="text-xl md:text-2xl font-serif text-gray-600 mb-6 italic">
              {subheading}
            </h3>

            {description && (
              <p className="text-gray-500 leading-relaxed mb-10 text-sm md:text-base">
                {description}
              </p>
            )}

            {ctaText && (
              <button className="bg-violet-600 cursor-pointer hover:bg-violet-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                {ctaText}
              </button>
            )}

            {children}
          </div>
        </div>

        {/* Empty Side (shows background) */}
        <div className="flex h-[300px] md:h-auto md:flex-1 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default SplitSection;
