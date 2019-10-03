import React from "react";
import styled from "styled-components";

import Table from "./Table";
import useFetch from "./hooks/useFetch";
import { generateColumnsAndRows } from "./helpers";
import { PERSON_COLUMNS } from "./constants";

const App = () => {
  const { data, error, loading } = useFetch("https://swapi.co/api/people/");
  const { rows, columns } = generateColumnsAndRows(PERSON_COLUMNS, data);

  // TODO: add better error handling
  if (error) return <p>Oops something went wrong :/</p>;
  return (
    <Container>
      <Table data={rows} columns={columns} loading={loading} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
