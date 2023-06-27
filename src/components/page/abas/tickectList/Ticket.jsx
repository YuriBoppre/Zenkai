import React, { useState, useEffect  } from "react";
import "./Ticket.css";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { TicketRows } from "../../../../Data";
import MemberYuri from '../../../../Assets/memberYuri.jpg'

export const Ticket = () => {
  const [data, setData] = useState(TicketRows);

  return (
    <div className="ticket">
      <div className="ticketTitleContainer">
        <h1 className="title">Ticket</h1>
        <button disabled className="ticketStatusEmAndamento">
          Em andamento
        </button>
      </div>
      <div className="ticketContainer">
        <div className="ticketShow">
          <div className="ticketShowTop">
          <span className="ticketShowTitle">Solicitante:</span>
            <div className="ticketShowTopTitle">
              <span className="ticketShowUsername">Correa Back</span>
            </div>
          </div>

          <div className="ticketShowBotton">
            <span className="ticketShowTitle">
              Membro da equipe responsável
            </span>
            <div className="ticketShowTopMember">
              <img src={MemberYuri} alt="member" className="ticketShowImg" />
              <div className="ticketShowTopTitle">
                <span className="ticketShowUsername">Yuri Boppre</span>
              </div>
            </div>

            <span className="ticketShowTitle">Detalhes do Ticket</span>
            <div className="ticketShowInfo">
              <span className='ticketShowInfoSubTitle'>Data de abertura:</span>
              <CalendarTodayIcon className='ticketShowIconDetails' />
              <span className='ticketShowInfoTitle'>15.05.2002</span>
            </div>
            <div className="ticketShowInfo">
              <span className='ticketShowInfoSubTitle'>Data de fechamento:</span>
              <CalendarTodayIcon className='ticketShowIconDetails' />
              <span className='ticketShowInfoTitle'>-</span>
            </div>

            <div className="ticketShowInfo">
              <span className='ticketShowInfoSubTitle'>Assunto:</span>
              <span className="ticketShowInfoTitle">Erro na emisão de NFe</span>
            </div>
            <div className="ticketShowInfo">
              <span className='ticketShowInfoSubTitle'>Descritivo:</span>
              <span className="ticketShowInfoTitle">Realizar ajuste no código, referente a emissão da NFe. No DTO de montagem está vindo com campo nulo(dt_emissao).</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
