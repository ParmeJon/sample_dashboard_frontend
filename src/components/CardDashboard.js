import React from 'react';
import Card from './Card';

import '../styles/cardDashboard.css'

const CardDashboard = ({accounts, loading}) => {
    return (
        <main>
            <h2 className="accounts-title">Accounts</h2>
            <div className="accounts-description">A card display of all accounts and their corresponding profile information.</div>
            <div className="accounts-wrapper">
            { accounts && !loading ? accounts.map((account) => <Card key={account._id} account={account}></Card>) : 'No Accounts'}
            </div>
        </main>
    )
}

export default CardDashboard