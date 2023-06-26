import React from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const navigate = useNavigate(),
      [data, setData] = React.useState('');
  
    function userLogin(username, password) {
     
        // setError(null);
        // setLoading(true);
        
        if (username == 'Admin' && password == '123'){
            setData(username)
            navigate("/page");
            // setLoading(false);
        } else {
            // setError('Usuário ou senha inválido!');
            // setLogin(false);
        }
    }
  
    return (
      <UserContext.Provider
        value={{ userLogin, data }} //, userLogout, data, error, loading, login 
      >
        {children}
      </UserContext.Provider>
    );
  };