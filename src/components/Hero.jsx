import Countdown from "./Countdown";

export default function Hero() {
  return (
    <div class="hero-gradient gap-4 text-[#fff6e4] flex flex-col items-end align-center justify-end bg-cover bg-top h-[80svh] flex items-center p-8">
      <h1 class="text-[#fff6e4] text-center text-6xl mb-4 drop-shadow-md">
        We're getting married!
      </h1>

      <p class="text-[#fff6e4] text-2xl text-center mb-0 drop-shadow-md">
        Meet us in the High Desert of Taos, New Mexico
      </p>
      <a
        className="flex flex-col items-center align-center justify-center gap-4"
        href="#rsvp"
      >
        <button class="text-[#fff6e4] bg-black pt-2 pb-1 px-4 mb-0 rounded-full text-2xl text-center drop-shadow-md">
          April 12, 2025
        </button>
        <Countdown />
      </a>
    </div>
  );
}
