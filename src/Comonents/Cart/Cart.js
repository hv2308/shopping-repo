import React, { useContext, useEffect, useState } from 'react'
import SingleContent from '../SingleContent/SingleContent';
import {Cartcontext} from'../../Context/Context'

const Cart = () => {
    const { cartprod, setCardprod } = useContext(Cartcontext)
    const [total, setTotal] = useState()
    useEffect(()=>{
        setTotal(cartprod.reduce((acc,curr)=>acc+Number(curr.price),0))}
        ,[total]
    )
        return (
            <div>
                <span>My Cart</span>
                <span>total: Rs. : {total}</span> <br/><br/><br/>
                {
                    cartprod.map((prod) =>
                        <SingleContent prod={prod} />
                    )
                }
            </div>
        )
    }

export default Cart;
