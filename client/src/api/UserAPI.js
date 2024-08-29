import axios from "axios";
import { useEffect, useState } from "react";

export default function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfor, setUserInfor] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });

          setIsLogged(true);
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);

          setUserInfor(res.data.name);
          // console.log(res.data);
        } catch (error) {
          alert(error.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);

  const addCart = async (product) => {
    //If not logged in, you can't add to cart
    if (!isLogged) {
      return alert("Please login to add products to your cart.");
    }
    //Check if the product is already in the cart
    const check = cart.every((item) => item._id !== product._id);
    
    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      alert("This product has already been added to your cart.");
    }
  };

  const removeCart = async (product) => {
    if (!isLogged) {
      return alert("Please login to remove products from your cart.");
    }
  
    // Check if product is defined or has an _id property
    if (!product || !product._id) {
      return alert("Invalid product. Please try again.");
    }
  
    const productIndex = cart.findIndex((item) => item._id === product._id);
  
    if (productIndex === -1) {
      alert("This product is not in your cart.");
      return;
    }
  
    const updatedCart = [...cart];
    
    // If the product quantity is greater than 1, decrease the quantity
    if (updatedCart[productIndex].quantity > 1) {
      updatedCart[productIndex].quantity -= 1;
    } else {
      // If the quantity is 1, remove the product from the cart
      updatedCart.splice(productIndex, 1);
    }
  
    setCart(updatedCart);
  };
  

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    userInfor: [userInfor, setUserInfor],
    cart: [cart, setCart],
    addCart: addCart,
    removeCart:removeCart,
  };
}
