import { Link } from "react-router-dom";

export function MainHeroSection({ title, description, buttonText, image }) {
  return (
    <section className="main_hero_section pt-16 lg:pt-20 mb-30">
      <div
        className="main_hero_inner relative min-h-[90vh] flex flex-col items-start justify-end py-20 after:content-['']
after:absolute
after:inset-0
after:bg-white
after:opacity-60
after:z-[2]"
      >
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-[1] object-top pointer-events-none"
          src={image}
        />
        <div className="main-hero-content  z-[3] w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-black pb-5 font-bold tracking-wide w-full lg:w-[55%]">
              {title}
              <span className="pt-3 pb-5 block text-[40%] font-light">
                {description}
              </span>
            </h1>
            <Link
              to="/"
              className="text-white font-medium hover:text-black hover:bg-transparent transition-colors duration-300 bg-black px-4 py-3 uppercase border-1 border-black"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
