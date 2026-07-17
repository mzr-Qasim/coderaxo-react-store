import { Link } from "react-router";
import main_hero from "/images/main_hero.jpg";


export function MainHeroSection() {
  return (
    <section className="main_hero_section pt-24">
      <div className="main_hero_inner relative min-h-[90vh] flex flex-col items-start justify-end py-20">
        <img
          className="main_hero_inner absolute top-0 left-0 w-full h-full object-cover z-[1] object-top"
          src={main_hero}
        />
        <div className="main-hero-content z-[3] w-full">
          <div className="container">
            <h1>New Arrivals</h1>
            <p>Delicate fabrics and a neutral colour palette are the details that give these pieces an edge.</p>
               <Link
        to="/"
        className="text-gray-800 font-medium hover:text-purple-600 transition-colors duration-300"
      >
        shop now
      </Link>

            
          </div>
        </div>
      </div>
    </section>
  );
}
