

import { MainHeroSection } from "../components/main_hero_section"
import { ProductCard } from "../components/product_card"
import { products } from '../productCardData'
import { Link } from "react-router"




function Home() {
  return (
    <>
      <MainHeroSection />
      <section className="product-cards">
        <div className="section-title">
          <h4>Recommended For You</h4>
          <p>We picked some items just for you</p>
        </div>
        <div className="container custom-container-lg">
          <div className="row g-4">
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