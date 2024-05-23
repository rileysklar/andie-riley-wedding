import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex flex-row justify-between items-center p-4 w-full cactus">
        <div className="flex flex-row gap-4">
          <a className="" href="/">
            <h1 className="mb-0 text-xl beth"> Andie & Riley </h1>
          </a>
          <ThemeToggle />
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
        <div
          className="mobile-menu z-10 absolute bg-[var(--white)] py-12 flex flex-col align-center items-center gap-8 text-2xl rounded-b-lg

         w-full h-auto"
        >
          <a href="/">Home</a>
          <a href="/blog">Info</a>
          <a href="/about">Love Story</a>
          <a href="https://www.zola.com/registry/rileyandandie">Registry</a>
        </div>
      )}
    </header>
  );
};

export default TopNav;
