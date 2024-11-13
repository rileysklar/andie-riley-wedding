import React, { useState } from "react";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle("high-contrast", !isHighContrast);
  };

  return (
    <header>
      <nav className="flex flex-row justify-between items-center p-4 w-full cactus">
        <div className="flex flex-row gap-4">
          <a className="" href="/">
            <h1 className="mb-0 text-xl"> Andie & Riley </h1>
          </a>
        </div>
        <div className="sm:flex flex-row hidden gap-4 ">
          <a
            className="hover:border-b-2 border-b-2 border-transparent hover:border-black"
            href="/"
          >
            Home
          </a>
          <a
            className="hover:border-b-2 border-b-2 border-transparent hover:border-black"
            href="/blog"
          >
            Info
          </a>
          <a
            className="hover:border-b-2 border-b-2 border-transparent hover:border-black"
            href="/about"
          >
            Love Story
          </a>
          <a
            className="hover:border-b-2 border-b-2 border-transparent hover:border-black"
            href="/blog/photo"
          >
            Gallery
          </a>
          <a
            className="hover:border-b-2 border-b-2 border-transparent hover:border-black"
            href="https://www.zola.com/registry/rileyandandie"
          >
            Registry
          </a>
        </div>
        <button
          className="flex items-center pb-2 text-4xl opacity-100 transition-all duration-200 sm:hidden"
          onClick={() => {
            console.log("Button clicked");
            setIsMenuOpen(!isMenuOpen);
          }}
          style={{ opacity: isMenuOpen ? 0.5 : 1 }}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="mobile-menu z-10 absolute bg-[var(--white)] shadow-lg py-12 flex flex-col align-center items-center gap-8 text-2xl rounded-b-lg w-full h-auto">
          <a href="/">Home</a>
          <a href="/blog">Info</a>
          <a href="/about">Love Story</a>
          <a href="/blog/photo">Gallery</a>
          <a href="https://www.zola.com/registry/rileyandandie">Registry</a>
        </div>
      )}
      <button
        className="fixed bottom-4 right-4 p-2 px-3 pt-2 pb-1   text-white rounded-full shadow-3xl"
        onClick={toggleHighContrast}
        title="Make the font high contrast"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.17)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        <span role="img" aria-label="Toggle Font">
          🔠
        </span>
      </button>
    </header>
  );
};

export default TopNav;
