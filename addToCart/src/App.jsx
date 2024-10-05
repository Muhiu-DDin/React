import { useState, useEffect } from 'react';
import Card from './components/Card.jsx';
import useFetchData from './hook/useFetchData.js';

function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartItems, setShowCartItems] = useState(false);

  const iterate = showCartItems ? cartItems : products;

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const got = JSON.parse(localStorage.getItem("cart"));
    if (got) {
      setCartItems([...got]);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  async function getProducts() {
    const data = await useFetchData();
    setProducts([...data]);
    console.log(data);
  }

  const addCart = (item) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((obj) => item.id === obj.id);
      if (index === -1) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  return (
    <>
      <div className="flex justify-between items-center p-5">
        <h1 className='text-2xl text-center'>Shopping</h1>
        <h1 className="cursor-pointer" onClick={() => setShowCartItems(!showCartItems)}>
          {showCartItems ? "your Items" : `Cart Items: ${cartItems.length}`}
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              iterate.map(
                (obj) => {
                  const isAdded = cartItems.findIndex((item) => item.id === obj.id) === -1;
                  return (
                    <Card
                      key={obj.id}
                      item={obj}
                      addToCart={() => addCart(obj)}
                      isAdded={isAdded}
                      remove = {showCartItems === true}
                      removeItem = {()=>{
                        const updated = cartItems.filter(
                          (product)=> product.id !== obj.id
                        )
                        setCartItems([...updated])
                      }}
                    />
                  );
                }
              )
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
