import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/login/Login";
import Page from "./components/page/Page";
import { UserStorage } from "./UserContex";
import EquipeList from "./components/page/abas/equipe/EquipeList";

const App = () => {
  return (<>
   <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="login/*" element={<Login />} />
              <Route path="page/*" element={<Page />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  </>)
}

export default App
