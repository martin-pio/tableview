import React from "react";
import { Table, Navbar, Container, Spinner } from "react-bootstrap";
const TableExample = ({ data }) => {
  if (data.length === 0) {
    console.log("Null value");
  } else {
    console.log(data);
  }
  const currentdate = new Date();
  const datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return (
    <>
      {data.length > 0 ? (
        <>
          <Navbar bg="light">
            <Container>
              <Navbar.Brand href="#home">Nwarehouse pvt ltd </Navbar.Brand>
              <Navbar.Text>{datetime} </Navbar.Text>
            </Container>
          </Navbar>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>WarehouseID</th>
                <th>SlotID</th>
                <th>NodeID</th>
                <th>TGS2620</th>
                <th>TGS2602</th>
                <th>TGS2600</th>
                <th>CO2</th>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>TimeStamp</th>
              </tr>
            </thead>
            <tbody>
              {data.map((datum, idx) => (
                <tr key={idx}>
                  <td>{datum.WarehouseID}</td>
                  <td>{datum.SlotID}</td>
                  <td>{datum.NodeID}</td>
                  <td>{parseInt(datum.TGS2620)}</td>
                  <td>{parseInt(datum.TGS2602)}</td>
                  <td>{parseInt(datum.TGS2600)}</td>
                  <td>{datum.CO2}</td>
                  <td>{datum.Temperature}</td>
                  <td>{datum.Humidity}</td>
                  <td>{datum.TimeStamp}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
};

export default TableExample;
