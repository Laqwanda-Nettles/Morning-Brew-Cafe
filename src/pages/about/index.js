import Footer from "../Footer";
import Navbar from "../Navbar";
import HoverCard from "../HoverCard";

export default function About() {
  return (
    <div style={{ backgroundColor: "#fefae0", minHeight: "100vh" }}>
      <Navbar />
      <section style={{ margin: 10, padding: 5 }}>
        <h1 className="section-header">About Morning Brew</h1>
        <p className="section-text">
          At Morning Brew, we believe that every great day starts with the
          perfect cup of coffee. Whether you're an early riser chasing that
          first sip of morning energy or someone savoring each moment of your
          coffee ritual, we've got you covered.
        </p>
        <p className="section-text">
          Founded with a passion for the art of brewing, we are committed to
          delivering fresh, high-quality coffee that fits seamlessly into your
          daily routine. Our carefully selected beans are sourced from
          sustainable farms around the world, roasted to perfection, and brought
          straight to your doorstep, so you can start every day with the perfect
          brew.
        </p>
        <p className="section-text">
          We know coffee is more than just a drink—it's a moment of comfort, a
          burst of inspiration, and a way to connect. That&apos;s why we&apos;re
          dedicated to making each cup an experience worth savoring. Whether
          you're exploring new roasts or sticking to your favorite blend,
          we&apos;re here to make sure your morning brew is always just right.
        </p>
      </section>
      <section style={{ margin: 10, padding: 5 }}>
        <h2 className="section-header">Products & Services</h2>
        <p className="section-text">
          At Morning Brew, we&apos;re dedicated to providing you with the
          freshest, most flavorful coffee—whether you&apos;re brewing at home or
          visiting our café. Here&apos;s what we have to offer:
        </p>
        <div
          style={{
            display: "flex",
            gap: 15,
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: 10,
          }}
        >
          <HoverCard
            image="/img/product.jpg"
            title="Signature Blends"
            description="Discover the perfect roast for your daily brew. Sourced from sustainable farms around the globe, each bag is roasted to perfection and tailored to suit your taste."
          />
          <HoverCard
            image="/img/bottledCoffee.jpg"
            title="Prepared Drinks"
            description="Whether you need a quick pick-me-up or a cozy, crafted drink to savor, we've got you covered at our storefront or for delivery. Our baristas take pride in preparing each drink just the way you like it."
          />
          <HoverCard
            image="/img/cafe.jpg"
            title="Morning Brew Café"
            description="Step into our welcoming café and enjoy a relaxed atmosphere designed for coffee lovers. Whether you're grabbing a quick coffee to go or settling in for a productive work session, our café is the perfect place to recharge."
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
