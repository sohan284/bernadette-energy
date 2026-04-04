import React from 'react';

const MapSection = () => {
    // Placeholder address for now. User can replace this with their actual address.
    const officeAddress = "123 Energy Way, Houston, TX 77002, USA";
    const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(officeAddress)}`;

    // Using a standard iframe embed with a generic location for now, since API key is required for the v1 embed.
    // Let's use a simpler embed URL that doesn't strictly require an API key for demo purposes.
    const fallbackMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;

    return (
        <section id="map" className=" bg-gray-50 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto relative z-10">


                <div className="bg-white shadow-blue-900/5 overflow-hidden border border-gray-100 group">
                    <div className="aspect-video md:aspect-3/1 w-full  overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={fallbackMapUrl}
                            title="Bernadette Energy Office Location"
                            className="w-full h-full"
                        ></iframe>

                        {/* Overlay to catch clicks and direct to Google Maps if needed, or just for visual polish */}
                        <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>

                {/* <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Main Office</p>
                            <p className="text-gray-800 font-medium">{officeAddress}</p>
                        </div>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-gray-200"></div>

                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Phone</p>
                            <p className="text-gray-800 font-medium">+1 (281) 123-4567</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default MapSection;
