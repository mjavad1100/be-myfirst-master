import React from 'react';
import ContactItem from './ContactItem';
import './ContactList.css';
const ContactList = ({ Contacts, deleteHandler }) => {
    return (
        <div className='mycontainer'>
            <h3>Comments</h3>
            {Contacts.length ? (<ul className='contacts'>
                {Contacts.map(Contact =>
                    <ContactItem key={Contact.id} data={Contact} deleteHandler={deleteHandler} />
                )}
            </ul>) : (
                <p className='massage'>no contacts yet!!!</p>)}
        </div>

    );
};

export default ContactList;