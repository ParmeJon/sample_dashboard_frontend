import React from 'react';
import MortgageGraph from './MortgageGraph';
import CreditGraph from './CreditGraph';

import '../styles/analyticsBoard.css'

const AnalyticsBoard = ({accounts, loading}) => {

    return (
      <main>
        <div className="analytics-wrapper">
            <MortgageGraph accounts={accounts} />
            <CreditGraph accounts={accounts} />
        </div>
      </main>
    );
}

export default AnalyticsBoard