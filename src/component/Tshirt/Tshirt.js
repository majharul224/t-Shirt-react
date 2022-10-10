import React from 'react';
import "./Tshirt.css"

const Tshirt = ({tshirt,handleAddToCart}) => {
    console.log(tshirt)
    const {name,picture,price} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: $ {price}</h4>
            <button onClick={()=>handleAddToCart(tshirt)}>Bye This</button>
        </div>
    );
};

export default Tshirt;