import React from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import calculateRating from "../helper/calculateRating";

import '../styles/mortgageGraph.css'

const MortgageGraph = ({accounts}) => {
    console.log('ingraph', accounts)
    const accountsWithRating = accounts.map((account) => {
      account.mortgageRating = calculateRating(account.credit, account.balance);
      return account;
    });

    const data = [
      {
        name: "BAD",
        "# of Accounts": accountsWithRating.filter(
          (account) => account.mortgageRating === "BAD"
        ).length,
      },
      {
        name: "OKAY",
        "# of Accounts": accountsWithRating.filter(
          (account) => account.mortgageRating === "OKAY"
        ).length,
      },
      {
        name: "GOOD",
        "# of Accounts": accountsWithRating.filter(
          (account) => account.mortgageRating === "GOOD"
        ).length,
      },
      {
        name: "EXCELLENT",
        "# of Accounts": accountsWithRating.filter(
          (account) => account.mortgageRating === "EXCELLENT"
        ).length,
      },
    ];

    return (
      <div className="mortgage-graph-card">
        <h2>
          Mortgage <span className="ratings-title">Ratings</span>
        </h2>
        <BarChart width={730} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="# of Accounts" fill="#005086" fillOpacity={0.9} />
        </BarChart>
      </div>
    );
}

export default MortgageGraph