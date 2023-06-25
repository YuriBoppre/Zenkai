import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Page.css";
import TicketList from "./abas/tickectList/TicketList";
import { Navigate, Route, Routes } from "react-router-dom";
import EquipeList from "./abas/equipe/EquipeList";
import { MemberEdit } from "./abas/equipe/memberEdit/memberEdit";


const Page = () => {
  return (
    <section className="containerPage">
      <Sidebar />
      <div className="containerPageItens">
        <Routes>
          <Route path="/" element={<TicketList />} />
          <Route path="/equipe" element={<EquipeList />} />
          {/* <Route path="/perdeu" element={<LoginPasswordLost />} /> */}
          <Route path="/member/:memberId" element={<MemberEdit />} />
        </Routes>
      </div>
    </section>
  );
};

export default Page;
