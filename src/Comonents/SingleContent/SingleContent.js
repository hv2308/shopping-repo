
import React, { useContext } from 'react'
import {Cartcontext} from '../../Context/Context'
import './SingleContent.css'


const SingleContent = ({ prod}) => {
const {cartprod,setCartprod}=useContext(Cartcontext);


    return (
        <div className='Tabs'>
            <img src={prod.image} alt={prod.name} style={{ paddingTop: "10px", width: '90%' }}></img>
            <div className='desc' >
                <b >{prod.name}</b>
                <span >${prod.price.substring(0, 3)}</span>
            </div>
            {
                cartprod.includes(prod) ?
                    <button className='descbutton' 
                    onClick={() =>  setCartprod(cartprod.filter((c) => c.id !== prod.id))}>
                    remove from card</button>
                :
                <button className='descbutton'
                onClick={()=>setCartprod([...cartprod,prod])}>Add to cart</button>
            }

        </div >
    )
}

export default SingleContent
