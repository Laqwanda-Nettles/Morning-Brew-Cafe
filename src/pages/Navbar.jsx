import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav className="nav d-flex justify-content-between navTheme">
      <p className="navTitle">Morning Brew</p>
      <ul className="nav justify-content-end align-items-center">
        <li className="nav-item ">
          <Link className="nav-link text-light link-warning" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light link-warning" href="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light link-warning" href="/gallery">
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
}
