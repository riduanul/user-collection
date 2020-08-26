import React from 'react';
import css from './Businessman.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { coffee,faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Businessman = (props) => {
    const {name, phone, img, email,address,  income} = props.user;
    const handleAddUser = props.handleAddUser;
    return (
        <div className="container">
            <div>
                <img src={img} alt="" width="250"/>
            </div>
            <div className="info">
                <h1>Name: {name}</h1>
                <br/>
                <h3>Email: {email}</h3>
                <h3>Address: {address.city}, {address.street}</h3>
                <h3>Phone Number: {phone}</h3>
                <h3>Annual Income: ${income}</h3>
                <br/> <br/>
                <button className="button" onClick={() => props.handleAddUser(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add </button>
            </div>
        </div>
    );
};

export default Businessman;  