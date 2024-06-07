import { useState, useEffect } from "react";
import {
  Entry,
  Show,
  EditableHeader,
  Header,
  HeaderElementIndex,
  HeaderFilter,
  FilterValue,
} from "../../types";
import { DataTableProps } from "../../interfaces";
import LongPress from "../LongPress/LongPress";
import "./DataTable.css";

function DataTable({ data }: DataTableProps) {
  const [tableData, setTableData] = useState<Entry[]>(data);
  const [lastFilterPressed, setLastFilterPressed] = useState("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [filterValues, setFilterValues] = useState<HeaderFilter>({
    id: "",
    name: "",
    type: "",
    language: "",
    premiered: "",
    ended: "",
    genres: "",
  });

  const [isEditable, setIsEditable] = useState<EditableHeader>({
    id: false,
    name: false,
    type: false,
    language: false,
    premiered: false,
    ended: false,
    genres: false,
  });

  const tableHeader: HeaderElementIndex = {
    id: null,
    name: null,
    type: null,
    language: null,
    premiered: null,
    ended: null,
    genres: null,
  };

  // filters the data based on the table header filter input
  const handleFilterChange =
    (identifier: ColumnIdentifier) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const filterValueId = identifier as keyof FilterValue;
      const newFilterMap = { ...filterValues };
      const filterPharase = event.target.value;
      newFilterMap[filterValueId] = filterPharase;
      const filteredTable = [...data].filter(function (el) {
        return (
          (el.show[identifier]?.toString() ?? "").indexOf(filterPharase) > -1
        );
      });

      setFilterValues(newFilterMap);
      setTableData(filteredTable);
    };
  const arrowIcon = sortDirection === "asc" ? "\u25B2" : "\u25BC";
  Object.keys(tableHeader).forEach((header) => {
    const tableHeaderKey = header as keyof typeof tableHeader;
    tableHeader[tableHeaderKey] = (
      <th onClick={() => handleTitleClick(tableHeaderKey)}>
        {isEditable[tableHeaderKey] ? (
          <label
            onDoubleClick={() => handleColumnFilter(tableHeaderKey)}
            className="table-input"
          >
            <input
              onChange={handleFilterChange(tableHeaderKey)}
              type="texfield"
              placeholder="&nbsp;"
              value={filterValues[tableHeaderKey]}
            />
            <span className="placeholder">{header}</span>
          </label>
        ) : (
          <LongPress
            onLongPress={() => handleColumnFilter(tableHeaderKey)}
            delay={200}
          >
            {header} {lastFilterPressed === tableHeaderKey ? arrowIcon : ""}
          </LongPress>
        )}
      </th>
    );
  });

  useEffect(() => {
    //first load the data in by prop and set it to a state that can be maniplated with sorting
    if (data) {
      setTableData(data);
    }
  }, [data]);

  type SortDirection = "asc" | "desc";
  type ColumnIdentifier = keyof Show;
  type HeaderIdentifier = keyof Header | keyof Entry;

  const sortEntries = (
    entries: Entry[],
    key: ColumnIdentifier,
    direction: SortDirection = "asc"
  ): Entry[] => {
    return entries.sort((a, b) => {
      const valueA = a.show[key];
      const valueB = b.show[key];

      if (Array.isArray(valueA) && Array.isArray(valueB)) {
        return direction === "asc"
          ? valueA.join(", ").localeCompare(valueB.join(", "))
          : valueB.join(", ").localeCompare(valueA.join(", "));
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return direction === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return direction === "asc" ? valueA - valueB : valueB - valueA;
      }

      return 0;
    });
  };

  const handleTitleClick = (identifier: ColumnIdentifier) => {
    const newDirection: SortDirection =
      sortDirection === "asc" ? "desc" : "asc";
    const sortedData = sortEntries([...tableData], identifier, newDirection);
    setTableData(sortedData);
    setSortDirection(newDirection);
    setLastFilterPressed(identifier);
    console.log("Header clicked:", identifier, "Direction:", newDirection);
  };

  // controls the filters that appear when you long press the table header
  const handleColumnFilter = (identifier: HeaderIdentifier) => {
    const filterId = identifier as keyof typeof tableHeader;
    const newEditable: EditableHeader = { ...isEditable };
    newEditable[filterId] = !newEditable[filterId];
    setIsEditable(newEditable);
  };

  const shows: JSX.Element[] = tableData.map((entry: Entry) => {
    const { id, name, type, language, premiered, ended, genres } = entry.show;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{type}</td>
        <td>{language}</td>
        <td>{premiered}</td>
        <td>{ended}</td>
        <td>{genres.join(", ")}</td>
      </tr>
    );
  });

  return (
    <table className="styled-table">
      <thead>
        <tr>
          {tableHeader.id}
          {tableHeader.name}
          {tableHeader.type}
          {tableHeader.language}
          {tableHeader.premiered}
          {tableHeader.ended}
          {tableHeader.genres}
        </tr>
      </thead>
      <tbody>{shows}</tbody>
    </table>
  );
}

export default DataTable;
