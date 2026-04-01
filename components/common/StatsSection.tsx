import React from 'react';

const stats = [
    {
        value: "3.5k+",
        label: "Successful Transactions"
    },
    {
        value: "5.7M+",
        label: "Barrels Traded"
    },
    {
        value: "150+",
        label: "Partnerships Established"
    }
];

const StatsSection = () => {
    return (
        <section className="bg-[#0a0a0a] py-20 border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-serif text-white mb-3">
                                {stat.value}
                            </span>
                            <span className="text-gray-400 text-sm md:text-base font-light tracking-wide">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
