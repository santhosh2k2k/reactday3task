import React,{useState} from 'react'
import Topbar from './components/Topbar'
import Product from './components/product'


function App() {

let data = [
  {
    name:"mobile",
    price:"$100",
  },
  {
    name:"Iphone",
    price:"$200",
  },
  {
    name:"tablet",
    price:"$150",
  },
  {
    name:"ipad",
    price:"$300",
  },
  {
    name:"Earphone",
    price:"$50",
  },
  {
    name:"Backcase",
    price:"$10",
  },
  {
    name:"Temper",
    price:"$100",
  },
  {
    name:"Wettissue",
    price:"$190",
  }
]

  let [cart,setCart]= useState(0)
  return <>
  <Topbar cart={cart}/>
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {data.map((e,i)=>{
                    return <Product data={e} key={i} cart={cart} setCart={setCart}/>
                  })}
                </div>
                </div> 
  </section>
  </>
}

export default App