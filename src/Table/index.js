import React, { useState } from "react";
import styled from "styled-components";
import keyBy from "lodash/keyBy";

import Header from "./header";
import Body from "./body";
import Loader from "./loader";

import { defaultSort } from "./helpers";

const Table = ({ data, columns, loading }) => {
  const [rows, setRows] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [currSorted, setCurrSorted] = useState("");

  const sort = (sortFunc, key) => {
    const sortOrderResult =
      sortOrder === "asc" || sortOrder === "" ? "desc" : "asc";

    const rowsResult = rows.sort((a, b) => {
      let valA = a[key];
      let valB = b[key];

      if (sortFunc) {
        return sortFunc(valA, valB);
      }
      return defaultSort(valA, valB, sortOrderResult);
    });

    setRows(rowsResult);
    setSortOrder(sortOrderResult);
    setCurrSorted(key);
  };

  // this is not entirely necessary/needed it just makes life slightly
  // easier when checking for customRenderer in the Body component
  const normalizedCols = keyBy(columns, "key");

  if (loading) return <Loader />;

  // essentially replaces getDerivedStateFromProps lifecycle in class
  // components, but for functional that uses hooks
  if (data !== rows) {
    setRows(data);
  }

  return (
    <Container>
      <StyledTable>
        <Header
          columns={columns}
          sortOrder={sortOrder}
          currSorted={currSorted}
          sortFunc={sort}
        />
        <Body rows={rows} normalizedCols={normalizedCols} />
      </StyledTable>
    </Container>
  );
};

export default Table;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  outline-offset: 15px;
  outline: 10px solid #f7f7f7;
`;

const Container = styled.div`
  width: 90%;
  padding: 25px;
  margin-top: 20px;
`;
