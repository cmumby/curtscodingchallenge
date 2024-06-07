/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import "./App.css";
import { DataItem, Entry } from "./types";
import DataTable from "./components/DataTable/DataTable";

const fetchData = async () => {
  const API_ENDPOINT = "https://api.tvmaze.com/search/shows?q=Hannity";

  const headers: any = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173",
  };
  let payload: any = [];
  try {
    const response = await fetch(API_ENDPOINT, headers);
    if (response.ok) {
      payload = await response.json();
      return payload;
    }
  } catch (e) {
    console.log({ e });
  }
  return payload || [];
};

function App() {
  const [data, setData] = useState<DataItem[]>([]);
  useEffect(() => {
    const saveData = async () => {
      // featches data and saves it locally in state
      const results: Entry[] = await fetchData();
      setData(results);
      console.log(results);
    };
    saveData();
  }, []);

  return (
    <>
      <h1>Table Component Challenge</h1>

      <div className="card">
        <DataTable data={data} />
      </div>
      <ul>
        <li>
          <strong>Click the column header</strong> to <strong>sort</strong> by
          by that field (ASC/ DESC)
        </li>
        <li>
          <strong>Long Press the Header</strong> to <strong>filter</strong> by
          by that field
        </li>
        <li>
          <strong>Double Click Header Label</strong> to <strong>Close</strong>{" "}
          the filter field
        </li>
      </ul>
    </>
  );
}

export default App;
