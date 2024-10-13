import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fefae0", minHeight: "100vh" }}>
      <Navbar />
      <div className="hero-container">
        <div className="hero-overlay">
          <h1 className="hero-text">Welcome to Morning Brew!</h1>
          <p className="hero-subtext">Start Every Day with the Perfect Brew.</p>
          <button type="button" className="btn btn-warning hero-btn">
            <Link
              href="/gallery"
              style={{
                textDecoration: "none",
                color: "brown",
                padding: 10,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Start Brewing!
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
