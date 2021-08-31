import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();

  return (
    <div>
      {" "}
      {location.pathname === "/" && (
        <footer>
          <p>&copy; Copyright 2021 Ghost</p>
          <Link to="/about">About</Link>
        </footer>
      )}
    </div>
  );
};

export default Footer;
