// Function to calculate Gamma for each point in the dataset
import React from "react";
import { winedata } from "../data";
import { calculateMean, calculateMedian, calculateMode } from "../utlity";
import CommonTableBody from "../components/CommonTableBody";

const mean = calculateMean(winedata, "gama"); // this will return the value of mean from utlity function
const median = calculateMedian(winedata, "gama"); // this will return the value of median from utlity function
const mode = calculateMode(winedata, "gama"); // this will return the value of mode from utlity function
const GammaStats = () => {
  return (
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
      <CommonTableBody title="Gamma" mean={mean} median={median} mode={mode} />
    </table>
  );
};

export default GammaStats;
