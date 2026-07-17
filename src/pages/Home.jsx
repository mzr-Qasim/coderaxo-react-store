

import { MainHeroSection } from "../components/main_hero_section"
import main_hero from "/images/main_hero.jpg";
import { ProductCard } from "../components/product_card"
import { products } from '../productCardData'
import { Link } from "react-router-dom";




function Home() {
  return (
    <>
      <MainHeroSection 
        title="New Arrivals"
        description="Delicate fabrics and a neutral colour palette are the details that give these pieces an edge."
        buttonText="Shop Now"
        image={main_hero}
      
      />
      <section className="product-cards mb-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="section-title text-center">
          <h4 className="text-black pb-5 font-bold">Recommended For You <span className="pt-3 pb-5 block text-[60%] font-light">We picked some items just for you</span></h4>
        </div>
          <div className="grid grid-cols-12 gap-6">
            {
              products.map(product => <ProductCard product={product} />)
            }
          </div>
        </div>
      </section>      
    </>
  )
}




export default Home