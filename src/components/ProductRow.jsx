import React from 'react';

function ProductRow({ product }) {
  // If the product is stocked, show the name as is. If not, show the name in red.
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;
  
  return (
    // Render the product row with the name and price
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;