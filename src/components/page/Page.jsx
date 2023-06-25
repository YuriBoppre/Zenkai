import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Page.css";
import TicketList from "./abas/tickectList/TicketList";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Equipe from "./abas/equipe/Equipe";
import EquipeList from "./abas/equipe/EquipeList";


const Page = () => {
  return (
    // <BrowserRouter>
    <>
      <div className="container">
        <Sidebar />
        <EquipeList />
        {/* <TicketList /> */}
      </div>
    </>

    // </BrowserRouter>


  );
};

export default Page;
