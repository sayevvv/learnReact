import React from "react";
import { Link } from "react-router-dom";

const Page2: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Page 2</h1>
      <Link to="/">Back to Landing Page</Link>
    </div>
  );
};

export default Page2;
