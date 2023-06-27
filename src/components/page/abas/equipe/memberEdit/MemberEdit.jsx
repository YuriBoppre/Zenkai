import React from 'react'
import './MemberEdit.css'
import MemberYuri from '../../../../../Assets/memberYuri.jpg'
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Input from "../../../../forms/Input";
import Button from "../../../../forms/Button";


export const MemberEdit = () => {
  return (
    <div className='member'>
      <div className="memberTitleContainer">
        <h1 className='title'>Edição de membro</h1>
      </div>
      <div className='memberContainer'>
        <div className='memberShow'>
          <div className='memberShowTop'>
            <img src={MemberYuri} alt="member" className='memberShowImg' />
            <div className="memberShowTopTitle">
              <span className='memberShowUsername'>Yuri Boppre</span>
              <span className='memberShowUserTitle'>Cursando Eng. Software</span>
            </div>
          </div>
          <div className="memberShowBotton">
            <span className="memberShowTitle">Detalhes da conta</span>
            <div className="memberShowInfo">
              <PersonIcon className='memberShowIcon' />
              <span className='memberShowInfoTitle'>Yuribds</span>
            </div>
            <div className="memberShowInfo">
              <CalendarTodayIcon className='memberShowIcon' />
              <span className='memberShowInfoTitle'>15.05.2002</span>
            </div>
            <span className="memberShowTitle">Contatos</span>
            <div className="memberShowInfo">
              <PhoneAndroidIcon className='memberShowIcon' />
              <span className='memberShowInfoTitle'>+55 (48) 99924-5421</span>
            </div>
            <div className="memberShowInfo">
              <EmailIcon className='memberShowIcon' />
              <span className='memberShowInfoTitle'>yuriboppre@gmail.com</span>
            </div>
            <div className="memberShowInfo">
              <LocationOnIcon className='memberShowIcon' />
              <span className='memberShowInfoTitle'>Criciúma | SC</span>
            </div>
          </div>
        </div>


        <div className="memberUpdate">
          <h1 className='title'>Editar</h1>
          <form>
            <div className="memberUpdateLeft">
               <div className="memberUpdateItem">
                  <label>Nome de usuario</label>
                  <Input type="text" placeholder='Yuribds' className='memberUpdateInput' />
               </div>
               <div className="memberUpdateItem">
                  <label>Nome completo</label>
                  <Input type="text" placeholder='Yuri Boppre' className='memberUpdateInput' />
               </div>
               <div className="memberUpdateItem">
                  <label>Email</label>
                  <Input type="text" placeholder='yuriboppre@gmail.com' className='memberUpdateInput' />
               </div>
               <div className="memberUpdateItem">
                  <label>Telefone</label>
                  <Input type="text" placeholder='+55 (48) 99924-5421' className='memberUpdateInput' />
               </div>
               <div className="memberUpdateItem">
                  <label>Endereço</label>
                  <Input type="text" placeholder='Criciúma | SC' className='memberUpdateInput' />
               </div>
            </div>
            <div className="memberUpdateRight">
              <div className="memberUpdateUpload">
                <img className='memberUpdateImg' src={MemberYuri} alt="member" />    
                <Input type="file" />
              </div>
              <button className='memberUpdateButton'>Atualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
