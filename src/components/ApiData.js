import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Person from "./TableData";
import { Table } from "react-bootstrap";

function App() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=12")
      .then((res) => {
        setPeople(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //   const filteredPeople = people.filter(person =>
  //     person.email.toLowerCase().includes(search.toLowerCase())
  //   );

  return (
    <div className="employee-app">
      <div className="employee-search">
        <h1 className="employee-text">Search an Employee</h1>
        <form>
          <input
            className="employee-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => {
            return (
              <Person
                key={person.cell}
                picture={person.picture.thumbnail}
                fullname={`${person.name.first} ${person.name.last}`}
                email={person.email}
                location={`${person.location.city}, ${person.location.state}, ${person.location.country}`}
                dateBirth={person.dob.date}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
