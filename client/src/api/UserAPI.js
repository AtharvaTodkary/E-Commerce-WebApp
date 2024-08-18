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
    if (!isLogged) {
      return alert("Please login to add products to your cart.");
    }

    const check = cart.every((item) => item._id !== product._id);

    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      alert("This product has already been added to your cart.");
    }
  };

  const removeCart = async (product) => {
    const updatedCart = cart.filter((item) => item._id !== product._id);
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
