import React from "react";

import { OPERATOR_VALUE } from "./constants";
import CaretDown from "../assets/arrow-down";
import CaretUp from "../assets/arrow-up";

export const renderCaret = ({ sortOrder, currSorted }) => {
  if (currSorted && sortOrder === "asc") {
    return <CaretDown />;
  }
  if (currSorted && sortOrder === "desc") {
    return <CaretUp />;
  }
  // hidden changes the visibility but keeps the DOM element there.
  // if this was just a string/null there would be a visual interruption
  // in the DOM when a caret is added from this state.
  return <CaretUp hidden />;
};

export const defaultSort = (a, b, order) => {
  // the number check & conversion is necessary since the api returns
  // numbers as strings example issue: '84' > '136' -> true
  const valA = !isNaN(a) ? Number(a) : a;
  const valB = !isNaN(b) ? Number(b) : b;

  if (valA < valB) {
    return OPERATOR_VALUE[order].lessThan;
  }
  if (valA > valB) {
    return OPERATOR_VALUE[order].greaterThan;
  }
  return 0;
};
