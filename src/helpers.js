import pick from "lodash/pick";

import { PERSON_COLUMNS } from "./constants";

const formatLabel = name => name.split("_").join(" ");

const addRenderer = colName =>
  colName === "created" || colName === "edited"
    ? data => new Date(data).toLocaleDateString()
    : null;

const generateColumns = columns =>
  columns.map(attr => ({
    key: attr,
    label: formatLabel(attr),
    customRenderer: addRenderer(attr),
    sort: true
    // customSorter: (a, b) => {}
  }));

export const generateRows = data =>
  data.map(person => pick(person, PERSON_COLUMNS));

export const generateColumnsAndRows = (columns, data) => ({
  rows: generateRows(data),
  columns: generateColumns(columns)
});
