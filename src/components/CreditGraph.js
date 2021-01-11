import React from "react";
import {
  PieChart,
  Pie,
  Tooltip
} from "recharts";
import withinCreditRange from '../helper/withinCreditRange'

import '../styles/creditGraph.css'

const CreditGraph = ({accounts}) => {
    const data = [
      {
        name: "Range: 300-599",
        value: withinCreditRange(accounts, 300, 599).length,
      },
      {
        name: "Range: 600-649",
        value: withinCreditRange(accounts, 600, 649).length,
      },
      {
        name: "Range: 650-699",
        value: withinCreditRange(accounts, 650, 699).length,
      },
      {
        name: "Range: 700-745",
        value: withinCreditRange(accounts, 700, 745).length,
      },
      {
        name: "Range: 746-799",
        value: withinCreditRange(accounts, 746, 799).length,
      },
      {
        name: "Range: 800-850",
        value: withinCreditRange(accounts, 800, 850).length,
      },
    ];
    
    return (
      <div className="credit-graph-card">
        <h2>
          Credit <span className="scores-title">Scores</span>
        </h2>
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={75}
            fill="#b0cac7"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    );
}

export default CreditGraph;