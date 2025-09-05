import React from "react";

const Hero = () => {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/landing.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-3xl">
        {/* Animated gradient border */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r animate-gradient">
          {/* Inner box with lower opacity + floating */}
          <div className=" bg-black/20 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10 space-y-6">
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-amber-300 via-orange-500 to-red-600" />
            {/* Big Title */}
            <h1 className="leading-tight font-extrabold text-4xl md:text-6xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="text-white">Benvenuti </span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 bg-clip-text text-transparent">
                da Bedda
              </span>
            </h1>

            {/* Button with gradient */}
            <div className="pt-2">
              <button
                onClick={() => handleScroll("#pizze")}
                className="w-fit inline-flex items-center justify-center bg-gradient-to-r from-amber-300 via-orange-500 to-red-700 hover:opacity-90 active:opacity-80 text-white font-semibold px-6 py-3 text-lg rounded-full transition md:px-8 md:py-4 md:text-xl shadow-lg"
                aria-label="Esplora il Menu"
              >
                Esplora il menu
              </button>
            </div>
            {/* Eyebrow */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
