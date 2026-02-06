export const NavBar = () => {
  return (
    <section>
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-evenly h-20">
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-[url('./assets/img/5.png')] bg-no-repeat bg-center bg-cover rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"></div>
          </div>

          <div className="hidden md:flex items-center space-x-14">
            <a
              href="#"
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
              <a
              href="#experience"
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200 relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="hidden md:block bg-black text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Reach Me!
            </a>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-btn"
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation*/}
        <div
          id="mobile-menu"
          className="md:hidden hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg animate-slide-down"
        >
          <div className="px-4 py-6 space-y-4">
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
            >
              Projects
            </a>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg mt-4">
              Reach Me!
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
