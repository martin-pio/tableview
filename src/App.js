import React, { useEffect, useState } from "react";
import TableExample from "./TableExample";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // const response = await fetch("https://api.n-warehouse.com/users/tableview");
    const response = await fetch("http://localhost:5000/tableview");
    const json = await response.json();
    setData(json);
  };
  return (
    <>
      <TableExample data={data} />
    </>
  );
};

export default App;
