import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Page.css";
import TicketList from "./abas/tickectList/TicketList";
import { Navigate, Route, Routes } from "react-router-dom";
import EquipeList from "./abas/equipe/EquipeList";
import { MemberEdit } from "./abas/equipe/memberEdit/memberEdit";
import { Ticket } from "./abas/tickectList/Ticket";
import TicketCreate from "./abas/ticketCreate/TicketCreate";

const Page = () => {
  return (
    <section className="containerPage">
      <Sidebar />
      <div className="containerPageItens">
        <Routes>
          <Route path="/" element={<TicketList />} />
          <Route path="/equipe" element={<EquipeList />} />
          <Route path="/member/:memberId" element={<MemberEdit />} />
          <Route path="/ticket/:ticketId" element={<Ticket />} />
          <Route path="/ticket/new" element={<TicketCreate />} />
        </Routes>
      </div>
    </section>
  );
};

export default Page;
