import React from 'react';
import './contactitem.css';

const ContactItem = ({ data: { id, name, lastName, email, phone }, deleteHandler }) => {
    return (
        <li className='item'>
            <p><span>👤</span>{name} {lastName}</p>
            <p><span>📧</span>{email}</p>
            <p><span>📞</span>{phone}</p>
            <button className='mydelbutt' onClick={() => deleteHandler(id)}>🗑️</button>
        </li>
    );
}


export default ContactItem;