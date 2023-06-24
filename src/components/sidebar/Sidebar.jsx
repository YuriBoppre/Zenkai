import React from 'react';
import { Sidebar_Itens } from './Sidebar_Itens';
import "./Sidebar.css";

const Sidebar = () => {
    return (<>
        <div className='sidebar'>
            <div className='sidebarWrapper'>
               <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>DashBoard</h3>
                    <ul className='sidevarList'>
                        <li className='sidebarListItem'>
                            Tickets
                        </li>
                        <li className='sidebarListItem'>
                            Novo Ticket
                        </li>
                        <li className='sidebarListItem'>
                            Equipe
                        </li>
                    </ul>
               </div>
            </div>
        </div>
    </>)
}


export default Sidebar;