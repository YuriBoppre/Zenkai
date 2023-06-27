import React from "react";
import "./TicketCreate.css";
import Input from "../../../forms/Input";
import Button from "../../../forms/Button";

const TicketCreate = () => {
  return (
    <div className="createTicket">
      <h1 className="title">Novo Ticket</h1>
      <form className="createTicketForm">
        <div className="createTicketItem">
          <label>Solicitante</label>
          <Input type="text" placeholder='Solicitante' />
        </div>
        <div className="createTicketItem options">
          <label>Status</label>
          <select className="createTicketSelect" name="active" id="active">
            <option value="no">Pendente</option>
            <option value="yes">Em análise</option>
            <option value="no">Em andamento</option>
          </select>
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

        <div className="createTicketItem options">
          <label>Ativo</label>
          <select className="createTicketSelect" name="active" id="active">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <div className="createTicketItem">
          <Button>Criar</Button> 
        </div>
      </form>
    </div>
  );
};

export default TicketCreate;
