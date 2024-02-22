import React, { useState } from 'react';
import './MyShelf.css';
const MyShelf = () => {
  const [products, setProducts] = useState([]);
  const [displayedData, setDisplayedData] = useState(null);

  const fetchProducts = (tranType) => {
    fetch(`http://localhost:8080/getted/${tranType}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setDisplayedData(tranType); // Set the displayedData state to indicate which data is being displayed
      });

  };
  
  return (
    <div>
      <button onClick={() => fetchProducts('rent')}>Get Rent Products</button>
      <button onClick={() => fetchProducts('buy')}>Get Buy Products</button>
      
      {displayedData === 'rent' && (
        <table >
          <thead>
            <tr>
              <th>ProductID</th>
              <th>ProductExpiryDate</th>
              <th>isActive</th>
              <th>productName</th>
              <th>ProductRentAmount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.shelfId}>
                <td>{product.rentId}</td>
                <td>{product.productExpiryDate}</td>
                <td>{product.isActive}</td>
                <td>{product.productName}</td>
                <td>{product.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {displayedData === 'buy' && (
        <table>
          <thead>
            <tr>
              <th>ProductID</th>
              <th>ProductName</th>
              <th>BuyAmount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.shelfId}>
                <td>{product.shelfId}</td>
                <td>{product.productName}</td>
                <td>{product.priceAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyShelf;