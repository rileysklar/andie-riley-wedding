import Countdown from "./Countdown";

export default function Hero() {
  return (
    <div className="hero-gradient gap-4 text-[#1a1a1a] flex flex-col align-center justify-center bg-cover bg-top h-[80svh] flex items-center p-8">
      <h1
        className="text-shadow-lg text-center text-6xl mb-4 drop-shadow-md"
        style={{
          textShadow:
            "2px 2px 0 #f4f4f4, -2px -2px 0 #f4f4f4, 2px -2px 0 #f4f4f4, -2px 2px 0 #f4f4f4",
        }}
      >
        We're getting married!
      </h1>

      <a
        href="#location"
        className="flex flex-col items-center align-center justify-center gap-4"
      >
        <p
          className="text-2xl text-shadow-lg text-center mb-0 drop-shadow-md p-4 rounded-lg text-[#f4f4f4]"
          style={{
            background: "rgba(0, 0, 0, 0.25)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.17)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          Meet us at Fiesta in San Antonio
        </p>
      </a>
      <a
        className="flex flex-col items-center align-center justify-center gap-4"
        href="#rsvp"
      >
        {/* <button class="text-[#fff6e4] bg-black pt-2 pb-1 px-4 mb-0 rounded-full text-2xl text-center drop-shadow-md">
          April 12, 2025
        </button> */}
        {/* <Countdown /> */}
      </a>
    </div>
  );
}
