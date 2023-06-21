import React from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const navigate = useNavigate();
  
    async function userLogin(username, password) {
     
        // setError(null);
        // setLoading(true);
        
        if (username == 'Admin' && password == '123'){
            navigate("/dashboard");
            // setLoading(false);
        } else {
            // setError('Usuário inválido!');
            // setLogin(false);
        }
    }
  
    return (
      <UserContext.Provider
        value={{ userLogin }} //, userLogout, data, error, loading, login 
      >
        {children}
      </UserContext.Provider>
    );
  };