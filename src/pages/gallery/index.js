import Card from "../Card";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Gallery() {
  return (
    <div style={{ backgroundColor: "#fefae0", minHeight: "100vh" }}>
      <Navbar />
      <h1 className="section-header">Gallery</h1>
      <section className="gallery-container">
        <Card image="img/coffeePlant.jpg" description="a coffee plant" />
        <Card image="img/dripCoffee.jpg" description="drip coffee" />
        <Card image="img/sign.jpg" description="coffee sign" />
        <Card image="img/openBag.jpg" description="open bag of coffee" />
        <Card image="img/thankyou.jpg" description="thank you sign" />
        <Card image="img/croissant.jpg" description="croissants and coffee" />
      </section>
      <section style={{ backgroundColor: "#faedcd", padding: 10 }}>
        <h2 className="section-header">Our Story</h2>
        <p className="section-text">
          Morning Brew was born from a simple idea: the belief that a great cup
          of coffee can set the tone for a great day. What started as a passion
          for exploring the perfect brew has grown into a mission to bring
          fresh, quality coffee to your home. From sourcing the finest beans to
          perfecting the roast, every step is taken with care, so you can start
          each day with a moment of joy. At Morning Brew, it&apos;s more than
          coffee—it&apos;s the beginning of something good.
        </p>
      </section>

      <section style={{ margin: 10, padding: 5 }}>
        <h2 className="section-header">Coffee Fun Facts</h2>
        <p className="section-text">
          At Morning Brew, we love everything about coffee—from the rich flavors
          to the fascinating stories behind every cup. Here are some fun facts
          to sip on:
        </p>
        <div className="facts-container">
          <div className="facts-card">
            <img src="/img/togoCup.png" alt="svg image of a coffee to go cup" />
            <div className="facts-text">
              <h3>Second Most Traded Commodity in the World</h3>
              <p>
                Only oil surpasses coffee in global trade. It&apos;s no wonder
                coffee fuels the world!
              </p>
            </div>
          </div>
          <div className="facts-card">
            <img src="/img/togoCup.png" alt="svg image of a coffee to go cup" />
            <div className="facts-text">
              <h3>Two Main Types of Coffee Beans: Arabica and Robusta</h3>
              <p>
                Arabica beans, known for their smooth and rich flavors, make up
                about 70% of the world&apos;s coffee production. Robusta beans,
                on the other hand, are stronger and have higher caffeine
                content.
              </p>
            </div>
          </div>
          <div className="facts-card">
            <img src="/img/togoCup.png" alt="svg image of a coffee to go cup" />
            <div className="facts-text">
              <h3>Coffee Dates Back to the 9th Century</h3>
              <p>
                Legend has it that coffee was discovered by a goat herder in
                Ethiopia, who noticed his goats became energetic after eating
                coffee berries!
              </p>
            </div>
          </div>
          <div className="facts-card">
            <img src="/img/togoCup.png" alt="svg image of a coffee to go cup" />
            <div className="facts-text">
              <h3>A Single Coffee Tree Can Produce Around 4,000 Beans</h3>
              <p>
                One tree yields about a pound of roasted coffee, showing just
                how much love goes into each cup.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
