import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/login/Login";
import Page from "./components/page/Page";
import { UserStorage } from "./UserContex";
// import EquipeList from "./components/page/abas/equipe/EquipeList";
// import Sidebar from "./components/sidebar/Sidebar";
// import TicketList from "./components/page/abas/tickectList/TicketList"
// import { MemberEdit } from "./components/page//abas/equipe/memberEdit/memberEdit";
// import { Ticket } from "./components/page//abas/tickectList/Ticket";

const App = () => {
  return (<>
   <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            {/* <Sidebar /> */}
            <Routes>
              <Route path="login/*" element={<Login />} />
              <Route path="page/*" element={<Page />} />
              {/* <Route path="/" element={<TicketList />} />
              <Route path="/equipe" element={<EquipeList />} />
              <Route path="/member/:memberId" element={<MemberEdit />} />
              <Route path="/ticket/:ticketId" element={<Ticket />} /> */}
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  </>)
}

export default App
