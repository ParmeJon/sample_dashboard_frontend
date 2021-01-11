import React from 'react';
import '../styles/card.css'

const Card = ({account}) => {

    return (
        <div className="card">
            {account.name_first}
        </div>
    )
}

export default Card;
