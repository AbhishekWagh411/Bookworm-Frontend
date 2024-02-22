import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {
  const [buyProducts, setBuyProducts] = useState([]);
  const [rentProducts, setRentProducts] = useState([]);
  const [showBuyTable, setShowBuyTable] = useState(false);
  const [showRentTable, setShowRentTable] = useState(false);
  const [customer,setCustomer]=useState(0); 

  useEffect(() => {
    const buyDetails = JSON.parse(sessionStorage.getItem('buydetails')) || [];
    const rentDetails = JSON.parse(sessionStorage.getItem('rentdetails')) || [];
    const customerDetails = JSON.parse(sessionStorage.getItem('CustomerLoginDetails'));
    setBuyProducts(buyDetails);
    setRentProducts(rentDetails);
    setCustomer(customerDetails);
  }, []);

  function buydata() {
    setShowBuyTable(true);
    setShowRentTable(false);
  }

  function rentdata() {
    setShowRentTable(true);
    setShowBuyTable(false);
  }
  function buyed(tranType, product){
    if(window.confirm('Are you sure you want to confirm your order?')){
    const details = JSON.stringify({
      customerId: customer,
      buyId: product.book_id,
      rentId: product.book_id,
      tranType: tranType,
      productExpiryDate: product.no ? new Date(Date.now() + product.no * 24 * 60 * 60 * 1000) : null,
      isActive: product.no ? new Date(Date.now() + product.no * 24 * 60 * 60 * 1000) > new Date() : false,
      productName:product.book_name,
      priceAmount:product.price,
      totalAmount:product.totalAmount
    });
    fetch("http://localhost:8080/addToShelf", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: details,
    });
    alert('Item added to cart successfully!');
    deleteProduct('buy', buyProducts.findIndex(item => item.book_id === product.book_id));
    deleteProduct('rent', buyProducts.findIndex(item => item.book_id === product.book_id));
  }
}
  function deleteProduct(type, index) {
    if (type === 'buy') {
      let buyDetails = JSON.parse(sessionStorage.getItem('buydetails')) || [];
      buyDetails.splice(index, 1);
      sessionStorage.setItem('buydetails', JSON.stringify(buyDetails));
      setBuyProducts(buyDetails);
    } else if (type === 'rent') {
      let rentDetails = JSON.parse(sessionStorage.getItem('rentdetails')) || [];
      rentDetails.splice(index, 1);
      sessionStorage.setItem('rentdetails', JSON.stringify(rentDetails));
      setRentProducts(rentDetails);
    }
}
  async function buyAllProducts() {
    // Map over the buyProducts array and return an array of promises
    const promises = buyProducts.map((product) => buyed('buy', product));
  
    // Wait for all the promises to resolve
    await Promise.all(promises);
  }
  return (
    <>
      <button onClick={buydata}>Buy</button>
      <button onClick={rentdata}>Rent</button>
      {showBuyTable && (
        <>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Book Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buyProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.book_id}</td>
              <td>{product.book_name}</td>
              <td>{product.price}</td>
              <td>
              <Link to= "/Invoice"><button onClick={() => buyed('buy', product)}>buy</button></Link>
              </td>
              <td>
              <button onClick={() => deleteProduct('buy', index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to= "/Invoice"><button onClick={buyAllProducts}>Buy All Products</button></Link>
      </>
    )}
        
  {showRentTable && (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Book Name</th>
        <th>Book Rent Price</th>
        <th>No of Rent Days</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {rentProducts.map((product, index) => (
        <tr key={index}>
          <td>{product.book_id}</td>
          <td>{product.book_name}</td>
          <td>{product.totalAmount}</td>
          <td>{product.no}</td>
          <td>
          <button onClick={() => buyed('rent', product)}>Rent</button>
          </td>
          <td>
            <button onClick={() => deleteProduct('rent', index)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  
)}
    </>
    
  );
}

export default Cart;
