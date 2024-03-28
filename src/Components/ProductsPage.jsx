import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const inStockMatch = !inStockOnly || product.inStock;
    return nameMatch && inStockMatch;
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={setSearchTerm} onInStockChange={setInStockOnly} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;