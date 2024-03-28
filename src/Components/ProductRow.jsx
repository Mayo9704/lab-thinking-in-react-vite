import React from 'react';
import './ProductRow.css'

function ProductRow({ product }) {
  const { name, price, inStock } = product;
  const style = { color: inStock ? 'black' : 'red' };

  return (
        <tr>
            <td style={style}>{name}</td>
            <td>{price}</td>
        </tr>
  );
}

export default ProductRow;