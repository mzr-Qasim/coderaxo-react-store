import { MainHeroSection } from "../components/main_hero_section"
import React from "react"
import { Link } from "react-router-dom";
import about_hero from "/images/about-us.jpg";

function AboutUs() {
    return (
      <>
        <MainHeroSection 
                title="About Us"
                description="Delicate fabrics and a neutral colour palette are the details that give these pieces an edge."
                buttonText="Explore More"
                image={about_hero}
        />
      </>



    )
}


export default AboutUs


