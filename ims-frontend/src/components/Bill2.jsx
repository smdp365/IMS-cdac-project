import React from "react";

const Bill2 = ({ location }) => {
  const { products } = location.state;

  return (
    <div>
      <h2>Bill Details</h2>
      {/* Render bill details using the products data */}
      {/* Example: */}
      {products && <div>{/* Render bill details here */}</div>}
    </div>
  );
};

export default Bill2;
