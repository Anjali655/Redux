import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Home(props) {
    // console.log("home?",props.data)
    // console.log("props?",props)
    const data = useSelector( (store) => store)
    // console.log(data, "data???????????")

    
    return (
        <div>
            <div className='add-to-cart'>
                <span className='cart-count'>{props.data.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/4357/4357350.png" />
            </div>
            <h1>Product page</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://images.hindustantimes.com/tech/img/2022/09/20/1600x900/iphone-14-pro-model-unselect-gallery-2-202209_GEO_US_1662809684583_1663679105577_1663679105577.jpg" alt="add-to-cart" />
                </div>
                <div className='text-wrapper item'>
                    <span>Iphone</span>
                    <span>$1000.0</span>
                </div>
                <div className='btn-wrapper item'>
                <button
                        onClick={() => props.addToCartHandler({ price: 1000, name: "iPhone 15 pro max" })}
                    >Add to cart</button>
                 <button 
                        onClick={() => props.removeToCartHandler()} className='remove-btn'
                    >Remove to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;