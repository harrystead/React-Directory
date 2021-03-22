import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../index.css";
import Person from "./TableData";
import FormLabel from "./Form";
import { Table, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [people, setPeople] = useState([]);
  const [sorted, setSorted] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Fullname");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => {
        setPeople(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  let filtered = people.filter((person) => {
    if (filter === "Fullname") {
      const fullname = `${person.name.first} ${person.name.last}`;
      return fullname.toLowerCase().includes(search.toLowerCase());
    } else if (filter === "Email") {
      return person.email.toLowerCase().includes(search.toLowerCase());
    } else if (filter === "Location") {
      const location = `${person.location.city}, ${person.location.state}, ${person.location.country}`;
      return location.toLowerCase().includes(search.toLowerCase());
    }
  });

  const sortOldest = () => {
    setSorted("Ascending");

    if(sorted === "Ascending"){
      setSorted("Descending");
    }

    console.log(sorted)
  };

if(sorted === "Ascending"){
  people.sort((a, b) => {
    if (b.dob.date > a.dob.date) {
      return -1;
    }
    if (a.dob.date > b.dob.date) {
      return 1;
    }
    return 0;
  });
}
else{
  people.sort((a, b) => {
    if (b.dob.date > a.dob.date) {
      return 1;
    }
    if (a.dob.date > b.dob.date) {
      return -1;
    }
    return 0;
  });
}

  return (
    <div className="employee-app">
      <div className="employee-search">
        <h1 className="employee-text">Search an Employee</h1>
        <FormLabel
          people={people}
          setSearch={setSearch}
          setFilter={setFilter}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Location</th>
            <th>
              DOB{" "}
              <FontAwesomeIcon
                onClick={sortOldest}
                icon={faArrowCircleDown}
              ></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered &&
            filtered.map((person) => {
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
