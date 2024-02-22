import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './display.css';



const Display = ({ book }) => {
    const [selectedBook, setSelectedBook] = useState(null);
    
    const[product,setProduct]=useState({});


    const {product_id} = useParams();

    useEffect(() =>{
        fetch(`http://localhost:8080/api/products/getProduct/${product_id}`)
        .then((res) => res.json())
        .then((result) => {
          setProduct(result); console.log(result);
        });
      }, []);
     
    const handleClick = () => {
        setSelectedBook(book);
    };

    return (
        <div>
            <h2>{product.product_english_name}</h2>
            <div className="product-container">
                <img className="product-image" src={"/BookImages/" + product.product_name + ".jpg"} ></img>
                <div className="product-details">
                    <h2>{product.product_english_name}</h2>
                    <p>Author: {product?.product_author}</p>
                    <p>Genre: {product?.product_genre?.genreDesc}</p>
                    <p>Description: {product?.product_description_long}</p>
                    
                    <button>add to card</button> 
                    <button>rent</button>
                </div>
            </div>
            {selectedBook && (
                <div>
                    <h3>Selected Book Details:</h3>
                    <p>Title: {selectedBook.title}</p>
                    <p>Author: {selectedBook.author}</p>
                    <p>Genre: {selectedBook.genre}</p>
                    <p>Description: {selectedBook.description}</p>
                </div>
            )}
            {selectedBook && (
                <div>
                    <h3>Selected Book Details:</h3>
                    <p>Title: {selectedBook.title}</p>
                    <p>Author: {selectedBook.author}</p>
                    <p>Genre: {selectedBook.genre}</p>
                    <p>Description: {selectedBook.description}</p>
                </div>
            )}
        </div>
    );
   
};

export default Display;

