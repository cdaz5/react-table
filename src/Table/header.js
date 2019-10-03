import React from "react";
import styled from "styled-components";

import Caret from "./caret";

const Header = ({ columns, sortOrder, currSorted, sortFunc }) => {
  const renderable = columns.map(({ key, label, sort, customSorter }) => (
    <Cell
      key={key}
      sorted={currSorted === key}
      onClick={() => (sort ? sortFunc(customSorter, key) : null)}
    >
      <Container>
        {label}
        {sort && (
          <Caret sortOrder={sortOrder} currSorted={currSorted === key} />
        )}
      </Container>
    </Cell>
  ));

  return (
    <thead>
      <tr>{renderable}</tr>
    </thead>
  );
};

export default Header;

const Cell = styled.th`
  font-size: 18px;
  text-align: left;
  text-transform: capitalize;
  vertical-align: middle;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
  color: ${({ sorted }) => sorted && "#5B45D0"};
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;
