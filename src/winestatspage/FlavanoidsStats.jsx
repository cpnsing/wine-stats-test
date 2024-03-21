import React from "react";
import { winedata } from "../data";
import { calculateMean, calculateMedian, calculateMode } from "../utlity";
import GammaStats from "./GammaStats";
import CommonTableBody from "../components/CommonTableBody";

// React component to display the results in a tabular format
const FlavanoidsStats = () => {
  const mean = calculateMean(winedata); // this will return the value of mean from utlity function
  const median = calculateMedian(winedata); // this will return the value of median from utlity function
  const mode = calculateMode(winedata); // this will return the value of mode from utlity function
  return (
    <div className="mainWine_Stats">
      <h1>Statistical Measures of Wine Data Set Flavanoids</h1>
      <table className="table_main">
        <thead>
          <tr>
            <th className="table_border">Measure</th>
            {Object.keys(mean).map((alcoholClass) => (
              <th key={alcoholClass} className="table_border">
                Class {alcoholClass}
              </th>
            ))}
          </tr>
        </thead>
        <CommonTableBody
          title="Flavanoids"
          mean={mean}
          median={median}
          mode={mode}
        />
      </table>
      <h1>Statistical Measures of Wine Data Set Gamma</h1>
      <GammaStats />
    </div>
  );
};

export default FlavanoidsStats;
