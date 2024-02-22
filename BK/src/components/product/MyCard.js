import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
// import './Mycard.css';


export default function MyCard({typeId , selectedLanguage}) {
    const [products, setProducts] = useState([]);
    const [showRentForm, setShowRentForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [rentAmount, setRentAmount] = useState(0);
    const [numberOfDays, setNumberOfDays] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        console.log('hello')
        if (selectedLanguage == null) {
            fetch(`http://localhost:8080/api/products/getProductsByType/${typeId}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
        }else{
            fetch(`http://localhost:8080/api/products/getProductsByTypeandLang/${typeId}/${selectedLanguage}`)
                .then((res) => res.json())
                .then((data) => setProducts(data));
        }
    }, [typeId, selectedLanguage]);
    const Buy = (product) => {
        if (window.confirm('Are you sure you want to confirm your order?')) {
          const details = JSON.stringify({
            book_id: product.product_id,
            book_name: product.product_name,
            price: product.product_offerprice,
            purchaseType: "buy"
          });
          sessionStorage.setItem("buydetails", details);
        }
      }
    
      const Rent = (product) => {
        if (window.confirm('Are you sure you want to confirm your order?')) {
          setSelectedProduct(product);
        setShowRentForm(true);
        setRentAmount(product.rent_per_day); // Set rental amount from product data
        calculateTotalAmount(numberOfDays); // Set total amount initially for 1 day
        }
      };
    
      const handleSubmitRent = () => {
        const details = JSON.stringify({
          book_id: selectedProduct.product_id,
          book_name: selectedProduct.product_name,
          price: totalAmount, // Use totalAmount as the price
          no:numberOfDays,
          purchaseType: "rent"
        });
        sessionStorage.setItem("rentdetails", details);
      
        alert(`Item added to cart successfully! Rental amount: ${rentAmount}, Total amount: ${totalAmount}`);
        setShowRentForm(false);
      };
    
      const calculateTotalAmount = (days) => {
        const total = rentAmount * days;
        setTotalAmount(total);
      };
    
      const handleCloseRentForm = () =>{ 
        setShowRentForm(false);
      };
      const onChangeNumberDay=(e)=>{
        setNumberOfDays(e.target.value)
        calculateTotalAmount(e.target.value);
      }

    return (
        <>
        <Container className='d-flex align-items-center py-5 row row-cols-1 row row-cols-sm-2 row row-cols-md-3 justify-content-start' fluid='sm'>
            {
                products.map((product) => (
                    <Card style={{ width: '18rem',height:'550px' }} className='mx-3 my-2 flex'>
                          <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Add this line */}

                        <Card.Img style = {{width: 220, height: 300}} variant="top" src={"/BookImages/" + product.product_name + ".jpg"} />
                        </div>
                        <Card.Body>
                            <Card.Title>{product.product_name}</Card.Title>
                            <Card.Text>{product.product_description_short}</Card.Text>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                           <Card.Text style={{textDecoration: 'line-through' }}> Rs.{product.product_baseprice}</Card.Text>
                            <Card.Text>Rs.{product.product_offerprice}</Card.Text>
                            </div>
                            <Button  variant="primary" onClick={() => Buy(product)}>Add to Cart</Button>
                            <Button className="ml-1" variant="primary" onClick={() => Rent(product)}>rent</Button>
                        </Card.Body>
                    </Card>))

            }
        </Container>
        {showRentForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseRentForm}>&times;</span>
            <h3>Rent Product</h3>
            <p>Product: {selectedProduct.product_name}</p>
            <label htmlFor="numberOfDays">Number of days:</label>
            <input type="number" id="numberOfDays" value={numberOfDays} onChange={onChangeNumberDay}/>
            <label htmlFor="rentAmount">Rental amount:</label>
            <input type="text" id="rentAmount" value={rentAmount} readOnly />
            <label htmlFor="totalAmount">Total amount:</label>
            <input type="text" id="totalAmount" value={totalAmount} readOnly />
            <button onClick={handleSubmitRent}>Rent</button>
          </div>
        </div>
      )}
        </>
  );
}