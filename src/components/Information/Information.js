import React, { useState } from 'react';
import './information.css';
import fakeData from'../../fakedata/fakeData';
import Businessman from '../businessman/Businessman';
import Details from '../Details/Details';


const Information = () => {
    const data = fakeData;
    console.log(data);
   let [user, setUser] = useState(data);

    let [count, setCount] = useState([]);
    const handleAddUser = (user) => {
        const newUser = [...count ,user];
        setCount(newUser);
    }

    return (
        <div className="info-container">
            <div className="info">
                       {
                user.map(usr => <Businessman user={usr} handleAddUser={handleAddUser}></Businessman>) 
            }
            </div>
            <div className="details">
               <Details count={count} ></Details>

            </div>
        </div>
    );
};

export default Information;