import React from 'react';
import Card from './Card';

import '../styles/cardDashboard.css'

const CardDashboard = ({accounts, loading}) => {
    return (
        <main>
            <div className="accounts-wrapper">
            { accounts ? accounts.map((account) => <Card account={account}></Card>) : 'No Accounts'}
            </div>
        </main>
    )
}

export default CardDashboard