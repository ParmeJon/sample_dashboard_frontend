import React from 'react';
import Card from './Card';

import '../styles/cardDashboard.css'

const CardDashboard = ({accounts, loading}) => {
    return (
        <main>
            <div className="accounts-wrapper">
            { accounts && !loading ? accounts.map((account) => <Card key={account._id} account={account}></Card>) : 'No Accounts'}
            </div>
        </main>
    )
}

export default CardDashboard