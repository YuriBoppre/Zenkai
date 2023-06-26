import React from "react";
import { Sidebar_Itens } from "./Sidebar_Itens";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="title">Zenkai</h3>
            <ul className="sidebarList">
              <Link to="/page/" className="link">
                <li className="sidebarListItem">Tickets</li>
              </Link>
              <Link to="/" className="link">
                <li className="sidebarListItem">Novo Ticket</li>
              </Link>
              <Link to="/page/equipe" className="link">
                <li className="sidebarListItem">Equipe</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
