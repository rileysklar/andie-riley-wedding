import { useState, useEffect } from "react";

export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial state based on scroll position on the client
      const initialScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsScrolled(initialScrollTop > 100);

      const checkScroll = () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        setIsScrolled(scrollTop > 100);
      };

      window.addEventListener("scroll", checkScroll);
      return () => {
        window.removeEventListener("scroll", checkScroll);
      };
    }
  }, []);

  return (
    <nav
      className={`duration-800 urbanist fixed top-0 z-50 w-full justify-between rounded-b-lg p-4 text-xl font-semibold shadow-lg	transition-all ${
        isScrolled ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div
          className="logo duration-800 transition-all"
          style={{ width: isScrolled ? "75px" : "125px" }}
        >
          <a href="/">
            <img
              className="h-auto"
              src={isScrolled ? "/logo-black.png" : "/logo-white.png"}
              alt="Logo"
            />
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          className="flex items-center pb-2 text-4xl opacity-100 transition-all duration-200 sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ opacity: isMenuOpen ? 0.5 : 1 }}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        {/* Desktop navigation links */}
        <div className="menu flex hidden w-full items-center justify-end space-x-4 underline-offset-4 sm:flex">
          <a
            href="/blog"
            className={`text-xl hover:underline ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Info
          </a>
          <a
            href="https://tolbertscms.com/wp-content/uploads/2024/04/TolbertsNewMenu010324.pdf"
            className={`text-xl hover:underline ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            About
          </a>
        </div>
      </div>

      {/* Mobile navigation links */}

      <div
        className={`menu flex w-full items-center justify-end gap-4 underline-offset-4 transition-opacity duration-500 sm:hidden md:flex md:hidden ${
          isMenuOpen
            ? "visible flex h-auto flex-col opacity-100 sm:block"
            : "invisible h-0 opacity-0 md:flex"
        }`}
      >
        <a
          href="/"
          className={`p-2 text-3xl hover:underline  ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Home
        </a>

        <a
          href="https://tolbertscms.com/wp-content/uploads/2024/04/TolbertsNewMenu010324.pdf"
          className={`p-2 text-3xl hover:underline  ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Menu
        </a>
        <a
          href="http://tolbertscms.com/wp-content/uploads/2024/04/Brunch-Menu-Current-April-2023.pdf"
          className={`p-2 text-3xl hover:underline  ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Brunch
        </a>
        <a
          href="/calendar"
          className={`p-2 text-3xl hover:underline  ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Calendar
        </a>
        <a
          href="/about"
          className={`p-2 text-3xl hover:underline  ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          About
        </a>
        <a href="https://order.spoton.com/rbbt-tolberts-restaurant-and-chili-parlor-15291/grapevine-tx/64e7d0d48137b6003f171eba"></a>
      </div>
    </nav>
  );
}
