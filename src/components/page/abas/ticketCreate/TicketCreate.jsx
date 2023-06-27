import React from "react";
import "./TicketCreate.css";
import Input from "../../../forms/Input";

const TicketCreate = () => {
  return (
    <div className="createTicket">
      <h1 className="title">Novo Ticket</h1>
      <form className="createTicketForm">
        <div className="createTicketItem">
          <label>Solicitante</label>
          <Input type="text" placeholder='Solicitante' />
        </div>
        <div className="createTicketItem">
          <label>Status</label>
          <Input type="text" placeholder='Status' />
        </div>
        <div className="createTicketItem">
          <label>Data de abertura</label>
          <Input type="text" placeholder='26/06/2023' />
        </div>
        <div className="createTicketItem">
          <label>Descrição</label>
          <Input type="text" placeholder='Descrição' />
        </div>
        <div className="createTicketItem">
          <label>Descritivo</label>
          <Input type="text" placeholder='Descritivo' />
        </div>

        <div className="createTicketItem">
          <label>Active</label>
          <select className="createTicketSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="createTicketButton">Create</button>
      </form>
    </div>
  );
};

export default TicketCreate;
