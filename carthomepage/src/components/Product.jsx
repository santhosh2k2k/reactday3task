import React,{useState} from 'react'
import { Rating } from 'react-simple-star-rating'


export default function Product({data,cart,setCart}) {

    let[toggle,setToggle]= useState(true)
    const [rating, setRating] = useState(0)

    const handleRating = (rate)=>{
        setRating(rate)
    }

  return <>
     <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{data.name}</h5>
                                    {data.price}
                                </div>
                                <Rating onClick={handleRating} initialValue={rating} />
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {
                                    toggle?<div className="text-center"><button className="btn btn-outline-dark mt-auto" 
                                    onClick={()=>{
                                        setCart(cart+1)
                                        setToggle(!toggle)
                                    }}
                                    >Add to Cart</button></div> :

                                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" 
                                onClick={()=>setCart(cart-1)}
                                >Remove from Cart</button></div>
                                }
                            </div>
                        </div>
     </div>
  </>
}

