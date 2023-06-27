import React, { useState } from "react";
import "./Equipe.css";
import { TeamRows } from "../../../../Data";
import Input from "../../../forms/Input";
import Button from "../../../forms/Button";

export const Equipe = () => {
  const [data, setData] = useState(TeamRows);

  return (
    <div className="createEquipe">
      <h1 className="title">Novo membro da equipe</h1>
      <form className="createEquipeForm">
        <div className="createEquipeItem">
          <label>Nome de usúario</label>
          <Input type="text" placeholder='Solicitante' />
        </div>
        <div className="createEquipeItem">
          <label>Email</label>
          <Input type="text" placeholder='26/06/2023' />
        </div>
        <div className="createEquipeItem options">
          <label>Ativo</label>
          <select className="createEquipeSelect" name="active" id="active">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <div className="memberUpdateRight">
             <label className="titleCamp">Avatar</label>
              <div className="equipeUpdateUpload">
                <Input type="file" />
              </div>
            </div>
        
      </form>
      <div className="createEquipeItem">
          <Button>Criar</Button> 
        </div>
    </div>
  );
};
