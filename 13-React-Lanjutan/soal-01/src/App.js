import { useEffect, useState } from "react";
import CardProduct from "./components/CardProduct";
import CartListItem from "./components/CartListItem";
import Navbar from "./components/Navbar";

import menus from "./dummy-data";

export default function App() {
  const [total, setTotal] = useState(0);
  const [purchasedItem, setPurchasedItem] = useState(0);
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    setPurchasedItem()
  })

  const addToCart = (id) => {
    console.log(id)
    // const found = cart.find(value => value.id === id);
    // const item = menus.find(value => value.id === id);
    // const remainingItems = cart.find(value => value.id !== id)
    
    // if(found){
    //   found.amount += 1
    //   setCart([...remainingItems, found])
    // }else{
    //   setCart([...cart, {
    //     id: item.id,
    //     name: item.name,
    //     price: item.price,
    //     amount: 1,
    //   }])
    // }
    
  };

  const decreaseCartAmount = (id) => {
    const found = cart.find(value => value.id === id);
    const remainingItems = cart.find(value => value.id !== id)
    
    if(found){
      if(found.amount > 1){
        found.amount -= 1
        setCart([...remainingItems, found])
      }else{
        setCart([...remainingItems])
      }
      
    }
  };

  const increaseCartAmount = (id) => {
    const found = cart.find(value => value.id === id);
    const remainingItems = cart.find(value => value.id !== id)
    
    if(found){
      found.amount += 1
      setCart([...remainingItems, found])
    }
  };

  return (
    <div className="bg-secondary">
      <Navbar totalItem={purchasedItem} />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card w-100">
              <div className="card-body">
                <div className="row">
                  {menus.map((menu) => (
                    <div
                      key={menu.id}
                      className="col-md-4 col-sm-6 col-12 my-2"
                    >
                      <CardProduct
                        {...menu}
                        addToCart={() => addToCart(menu.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <ol className="list-group">
              {cart.map((c) => {
                return (
                  <CartListItem
                    key={c.id}
                    {...c}
                    increase={() => increaseCartAmount(c.id)}
                    decrease={() => decreaseCartAmount(c.id)}
                  />
                );
              })}
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Total Harga</div>
                </div>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(total)}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
