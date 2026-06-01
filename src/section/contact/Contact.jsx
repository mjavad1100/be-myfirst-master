import { useState } from 'react';
import { v4 } from "uuid";
import './contact.css';
import ContactList from './ContactList';
import { Container } from 'react-bootstrap';
const inputs = [
    { type: 'text', name: 'name', placeholder: 'Name' },
    { type: 'text', name: 'lastName', placeholder: 'Last Name' },
    { type: 'email', name: 'email', placeholder: 'Email' },
    { type: 'number', name: 'phone', placeholder: 'Phone' },
]
const Contact = () => {
    const [Contacts, setContacts] = useState([])
    const [alert, setAlert] = useState("");
    const [Contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setContact((Contact) => ({ ...Contact, [name]: value }));
    };
    const addHandler = () => {
        if (!Contact.name || !Contact.lastName || !Contact.phone) {
            setAlert("plz enter valid data");
            return;
        }
        setAlert("");
        const newContact = { ...Contact, id: v4() };
        setContacts((Contacts) => [...Contacts, newContact]);
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        });

    };
    const deleteHandler = (id) => {
        const newContacts = Contacts.filter((Contact) => Contact.id !== id);
        setContacts(newContacts);
    };
    return (
        <section id='contact'>
            <Container fluid>
                <div className='mytitlelight'>
                    <h2>Contact Us</h2>
                </div>
                <div className="parentchild">
                    <div className='form'>
                        {
                            inputs.map((input, index) => (<input key={index} type={input.type} placeholder={input.placeholder} value={Contact[input.name]} name={input.name} onChange={changeHandler} />))
                        }

                        <button onClick={addHandler} className='bttn primary'>Add Contact</button>

                    </div>
                    <div className="alert">
                        {alert && <p>{alert}</p>}
                    </div>
                    <ContactList Contacts={Contacts} deleteHandler={deleteHandler} />
                </div>
            </Container>




        </section>
    );
};

export default Contact;