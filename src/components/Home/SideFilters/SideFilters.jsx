import React,{useState} from "react";
import "./SideFilters.scss";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";

const SideFilters = () => {

  const [rate, setRate] = useState(3)

  return (
    <div className="filters">
      <span className="filter-title">Filter Products</span>
      <div className="filter-controls">
        <Form.Group controlId="selectOrder">
          <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id="inline-1"
            defaultChecked
          />
          <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id="inline-2"
          />
        </Form.Group>

        <Form.Group>
          <Form.Check
            inline
            label="Include Out Of Stock"
            name="group2"
            type="checkbox"
            id="inline-3"
          />
          <Form.Check
            label="Fast Delivery Only"
            name="group2"
            type="checkbox"
            id="inline-3"
          />
        </Form.Group>

        <span className="rating-section">
          <label htmlFor="">Rating:</label>
          <Rating rating={rate} style={{cursor:'pointer'}} onClick={setRate}/>
        </span>

        <Button variant="light">Clear Filters</Button>
      </div>
    </div>
  );
};

export default SideFilters;
