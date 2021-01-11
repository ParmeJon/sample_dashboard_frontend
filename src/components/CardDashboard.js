import React from 'react';
import Card from './Card';

import '../styles/cardDashboard.css'

const CardDashboard = ({accounts, loading}) => {
    console.log('accounts api', accounts)
    return (
        <main>
            <div className="accounts-wrapper">
            { accounts && !loading ? accounts.map((account) => <Card key={account._id} account={account}></Card>) : 'No Accounts'}
            </div>
        </main>
    )
}

export default CardDashboard