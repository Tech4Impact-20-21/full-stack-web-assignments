import { useEffect, useState } from "react";
import CardProduct from "./components/CardProduct";
import CartListItem from "./components/CartListItem";
import Navbar from "./components/Navbar";

import menus from "./dummy-data";

export default function App() {
  const [total, setTotal] = useState(0);
  const [purchasedItem, setPurchasedItem] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const menu = menus.find((menu) => menu.id === id);
    const itemInCart = cart.find((item) => item.id === id);
    if(itemInCart){
      increaseCartAmount(id)
    } else {
      setCart([
        ...cart,
        {
          id: id,
          name: menu.name,
          price: menu.price,
          amount: 1
        }
      ])
    }
  };

  const decreaseCartAmount = (id) => {
    const specifiedItem = cart.find((item) => item.id === id);
    const otherItems = cart.filter((item) => item.id !== id);
    specifiedItem.amount -=1

    if(specifiedItem.amount > 0){
      setCart([
        ...otherItems,
        specifiedItem
      ])
    } else {
      setCart(otherItems)
    }
    
  };

  const increaseCartAmount = (id) => {
    const specifiedItem = cart.find((item) => item.id === id);
    const otherItems = cart.filter((item) => item.id !== id);
    specifiedItem.amount += 1;

    setCart([
      ...otherItems,
      specifiedItem
    ])
  };

  useEffect(() => {
    setTotal(cart.reduce(((previousValue, currentValue) => previousValue + currentValue.amount * currentValue.price), 0));
    setPurchasedItem(cart.reduce(((previousValue, currentValue) => previousValue + currentValue.amount), 0))
  },
  [cart])

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
