import React, { useState } from "react";
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
            {/* <img src={ticketYuri} alt="ticket" className='ticketShowImg' /> */}
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
              <PersonIcon className="ticketShowIcon" />
              <span className="ticketShowInfoTitle">
                Membro da equipe responsável
              </span>
            </div>

            <span className="ticketShowTitle">Contatos</span>
            <div className="ticketShowInfo">
              <PhoneAndroidIcon className="ticketShowIcon" />
              <span className="ticketShowInfoTitle">+55 (48) 99924-5421</span>
            </div>
            <div className="ticketShowInfo">
              <EmailIcon className="ticketShowIcon" />
              <span className="ticketShowInfoTitle">yuriboppre@gmail.com</span>
            </div>
            <div className="ticketShowInfo">
              <LocationOnIcon className="ticketShowIcon" />
              <span className="ticketShowInfoTitle">Criciúma | SC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
