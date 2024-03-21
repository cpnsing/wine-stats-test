import React from "react";

export default function CommonTableBody({ mean, median, mode, title }) {
  return (
    <>
      <tbody>
        <tr>
          <td className="table_border">{title} Mean</td>
          {Object.values(mean).map((value, index) => (
            <td key={index} className="table_border">
              {Number(value).toFixed(3)}
            </td>
          ))}
        </tr>
        <tr>
          <td className="table_border">{title} Median</td>
          {Object.values(median).map((value, index) => (
            <td key={index} className="table_border">
              {Number(value).toFixed(3)}
            </td>
          ))}
        </tr>
        <tr>
          <td className="table_border">{title} Mode</td>
          {Object.values(mode).map((value, index) => (
            <td key={index} className="table_border">
              {Number(value).toFixed(3)}
            </td>
          ))}
        </tr>
      </tbody>
    </>
  );
}
