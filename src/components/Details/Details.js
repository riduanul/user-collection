import React from 'react';

const Details = (props) => {
    const count = props.count;
    let totalIncome =0;
    for (let i = 0; i < count.length; i++) {
        let user = count[i];
        // user.parseInt(user.income);
        totalIncome = totalIncome + user.income;
    }
    return (
        <div>
             <h2>Businessman Details</h2>
                 <br/>
                 <h3>Total Businessman:{count.length}</h3>
                 <h3>Total Income:$ {totalIncome}</h3>
        </div>
    );
};

export default Details;