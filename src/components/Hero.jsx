import Countdown from "./Countdown";
import { AIChatComponent } from './AIChatComponent';

export default function Hero() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Prevent any scroll behavior
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }, 0);
  };

  return (
    <div className="hero-gradient text-[#f4f4f4] flex flex-col items-center bg-cover bg-top h-[80svh] p-4 sm:p-8 overflow-hidden">
      <h1 className="text-shadow-lg text-center text-5xl sm:text-6xl mb-4 mt-[6rem] drop-shadow-md font-bold">
        We're getting married!
      </h1>

      <div 
        className="w-full max-w-2xl mt-auto overflow-hidden" 
        onClick={e => e.preventDefault()}
        onSubmit={handleSubmit}
      >
        <AIChatComponent 
          maxMessages={50}
          className="text-white"
          preventScroll={true}
        />
      </div>
    </div>
  );
}
