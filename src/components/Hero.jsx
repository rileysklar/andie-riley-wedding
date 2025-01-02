import Countdown from "./Countdown";
import { AIChatComponent } from './AIChatComponent';

export default function Hero() {
  return (
    <div className="hero-gradient gap-4 text-[#f4f4f4] flex flex-col align-center justify-end bg-cover bg-top h-[80svh] flex items-center p-8">
      <h1 className="text-shadow-lg text-center text-6xl mb-4 drop-shadow-md font-bold">
        We're getting married!
      </h1>

      <a
        href="#location"
        className="flex flex-col items-center align-center justify-center gap-4"
      >
        <p
          className="text-md text-shadow-lg text-center mb-0 drop-shadow-md p-4 rounded-lg text-white font-semibold"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
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

      {/* AI Chat Component with improved contrast */}
      <div className="w-full max-w-2xl mt-8">
        <AIChatComponent 
          maxMessages={50}
          className="text-white"
        />
      </div>
    </div>
  );
}
