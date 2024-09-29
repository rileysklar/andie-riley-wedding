import Countdown from "./Countdown";

export default function Hero() {
  return (
    <div className="hero-gradient gap-4 text-[#fff6e4] flex flex-col items-end align-center justify-end bg-cover bg-top h-[80svh] flex items-center p-8">
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 text-left">
          <h1 className="text-[#2d2d2d] text-6xl mb-4 drop-shadow-md">
            We're getting married!
          </h1>
          <p className="text-[#0b0b0b] text-2xl mb-0 drop-shadow-md">
            Meet us at Fiesta in San Antonio
          </p>
        </div>
        <div className="flex-1"></div> {/* Empty column for spacing */}
      </div>
      <a
        className="flex flex-col items-center align-center justify-center gap-4"
        href="#rsvp"
      >
        {/* <button className="text-[#fff6e4] bg-black pt-2 pb-1 px-4 mb-0 rounded-full text-2xl text-center drop-shadow-md">
          April 12, 2025
        </button> */}
        {/* <Countdown /> */}
      </a>
    </div>
  );
}
