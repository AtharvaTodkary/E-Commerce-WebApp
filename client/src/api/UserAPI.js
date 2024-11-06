import axios from "axios";
import { useEffect, useState } from "react";

export default function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfor, setUserInfor] = useState({});
  const [cart, setCart] = useState([]); // Separate state for cart

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          // Fetch user information
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });

          setIsLogged(true);
          setIsAdmin(res.data.role === 1);
          setUserInfor(res.data);

          // Initialize cart from fetched user data
          setCart(res.data.cart || []);
        } catch (error) {
          console.error("Error fetching user information:", error);
          alert(error.response?.data?.msg || "Failed to fetch user information");
        }
      };
      getUser();
    }
  }, [token]);

  const updateUserCart = async (updatedCart) => {
    try {
      const email = userInfor.email;
      setCart(updatedCart); // Update cart state
      await axios.put("/user/updateUser", { email, cart: updatedCart }); // Sync with server
    } catch (error) {
      console.error("Error updating cart:", error);
      alert("Failed to update cart.");
    }
  };

  const addCart = async (product) => {
    if (!isLogged) return alert("Please login to add products to your cart.");

    const existingProduct = cart.find((item) => item._id === product._id);
    let updatedCart;

    if (existingProduct) {
      // Increase quantity if product already exists
      updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Add new product to the cart
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    await updateUserCart(updatedCart);
  };

  const removeCart = async (product) => {
    if (!isLogged) return alert("Please login to remove products from your cart.");
    if (!product || !product._id) return alert("Invalid product. Please try again.");

    const productIndex = cart.findIndex((item) => item._id === product._id);

    if (productIndex === -1) {
      return alert("This product is not in your cart.");
    }

    const updatedCart = [...cart];
    if (updatedCart[productIndex].quantity > 1) {
      updatedCart[productIndex].quantity -= 1; // Decrease quantity
    } else {
      updatedCart.splice(productIndex, 1); // Remove product if quantity is 1
    }

    await updateUserCart(updatedCart);
  };

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    userInfor: [userInfor, setUserInfor],
    cart: [cart, setCart],
    addCart,
    removeCart,
  };
}
