import React,{useState} from 'react'
import faker from 'faker'
import SingleContent from '../SingleContent/SingleContent';
import './Home.css'

 

const Home = () => {
    const productsarray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        
    }));
    // console.log(productsarray)
    const [products] = useState(productsarray);

    return (
        <div className='homecss'>
            {
               products.map((prod,ind)=>
                <SingleContent key={ind} prod={prod} />
               ) 
            }
        </div>
    )
}

export default Home
