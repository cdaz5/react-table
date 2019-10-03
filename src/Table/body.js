import React from "react";
import styled from "styled-components";

const body = ({ rows, normalizedCols }) => {
  const renderable = rows.map(row => (
    <tr key={row.name}>
      {Object.entries(row).map(([k, v]) => {
        const renderer = normalizedCols[k].customRenderer;
        return <Cell key={k}>{renderer ? renderer(v) : v}</Cell>;
      })}
    </tr>
  ));

  return <tbody>{renderable}</tbody>;
};

export default body;

const Cell = styled.td`
  font-size: 18px;
  text-align: left;
  text-transform: capitalize;
  vertical-align: center;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
`;
