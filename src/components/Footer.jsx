import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer>
      <p>&copy; Copyright 2021 Ghost</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default footer;
