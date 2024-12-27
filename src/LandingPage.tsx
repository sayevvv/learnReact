import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <Link to="/page2">Go to Page 2</Link>
    </div>
  );
};

export default LandingPage;
