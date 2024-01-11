import React from 'react'
import './About.css'

function About() {
  return (
    <>

      <h1 className="about-title">About Us</h1>
      <div className="about-photo" id=""></div>

      <section className="about_details" style={{ fontfamily: 'Lobster' }}>

        <span>Benz bakery is befitting our exclusive and indulgent range of offerings that Cakes and
          Pastary.<br /><br />

          From our humble beginnings in 2023, when the first Benz bakery store opened its doors at the
          Tembipada, bhandup west (Mumbai).<br /><br />

          Our mission is to spread happiness by serving smiles on a plate, and this journey continues as we open
          Benz bakery across the country.
        </span>

      </section>


      {/* -------------------------Our Value------------------- */}

      <section className="value" id="product" style={{ padding: "0px 10%" }}>
        <h1 className="value-title">Our Value</h1>
        <div className="v-row">

          <div className="v-cell">
            <img src="./Images/Recipes.png" alt="Recipes" style={{ width: "200px" }} />
            <div className="cake-star">
            </div>
            <h2>AUTHENTIC RECIPES</h2>
            <p>Our products are based on traditional home-style recipes, using fresh ingredients and no
              preservatives or chemicals.</p>
          </div>

          <div className="v-cell">
            <img src="./Images/love.png" alt="baked with love" style={{ width: "100px" }} />
            <h2>BAKED WITH LOVE</h2>
            <p>Our passion for baking is poured into every recipe, serving smiles on a plate everyday.</p>
          </div>


          <div className="v-cell">
            <img src="./Images/Price.png" alt="Best Price" />
            <h2>HONESTLY PRICED</h2>
            <p>We constantly strive to offer the best products at the right prices..</p>
          </div>


          <div className="v-cell">
            <img src="./Images/Quality.png" alt="Quality Products" />
            <h2> COMMITTED TO QUALITYS</h2>
            <p>From our ingredients to our kitchen operations & guest services, we always prioritize
              quality.</p>
          </div>
        </div>
      </section>

    </>


  )
}

export default About