import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function FormLabel({ setFilter, setSearch}) {

    const handleChange = (e) => {
        setSearch(e.target.value);
      };
    
      const filterResults = (e) => {
        setFilter(e.target.value);
      }

  return (
    <form>
      <Form.Label>Filter Results By Fullname, Email or Location</Form.Label>
      <Form.Control 
        className="form-options"
        onChange={filterResults}
        as="select"
        defaultValue="Choose..."
      >
        <option defaultValue>Fullname</option>
        <option>Email</option>
        <option>Location</option>
      </Form.Control>
      <input 
        className="employ-input"
        type="text"
        onChange={handleChange}
        placeholder="Search"
      />
    </form>
  );
}
