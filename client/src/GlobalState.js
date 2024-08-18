import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ProductAPI from "./api/ProductAPI";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async()=>{
    const refresh = await axios.get('/user/refresh_token');
    setToken(refresh.data.accesstoken);
  }

  useEffect(()=>{
    const first = localStorage.getItem('firstLogin')
    if(first){
        refreshToken()
    }
  })


  const productAPI = ProductAPI();
  const userAPI = UserAPI(token);

  const state = {
    token,
    productAPI,
    userAPI
  };

  return (
    <GlobalState.Provider value={state}>
      {children}
    </GlobalState.Provider>
  );
};
