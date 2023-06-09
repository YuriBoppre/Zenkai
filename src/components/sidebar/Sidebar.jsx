import React from 'react';
import { Sidebar_Itens } from './Sidebar_Itens';

const Sidebar = () => {
    return (<>
        <div className='Sidebar'>
            <div className='logo'>
                <img src="" alt="" />
                <span>Ticket List</span>
            </div>
        </div>

        <div className='menu'>
            {Sidebar.map((item, index) => {
                return (
                    <div className='menuItem'>
                        <item.icon />
                        <item.heading />
                    </div>
                )
            })}
        </div>
    </>)
}


export default Sidebar;