import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Page.css";
import TicketList from "./abas/tickectList/TicketList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Equipe from "./abas/equipe/Equipe";

const Page = () => {
  return (
    // <BrowserRouter>
      <Sidebar />
      // {/* <div className="container">
      //   <Routes>
      //     <Route path="/">
      //       <TicketList />
      //     </Route>
      //     <Route path="/equipe">
      //       <TicketList />
      //     </Route>
      //   </Routes>
      // </div> */}


    // </BrowserRouter>


  );
};

export default Page;
