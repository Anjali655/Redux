import React from 'react';


function Header(props) {
    console.log("Header", props.data)
    return (
        <div>
            <div className='add-to-cart'>
                <span className='cart-count'></span>
                <img src="https://cdn-icons-png.flaticon.com/512/4357/4357350.png" />
            </div>
            
        </div>
    );
}

export default Header;