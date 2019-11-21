import React, { Component } from "react";
// bootstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./lectureregister.css";

class Kakaoregister extends Component {
  render() {
    return (
      <Form
        className="lectureregister-form"
        onSubmit={this.handleSubmit}
        noValidate
      >
        <h1>
          <span className="font-weight-bold">Exercise Register</span>
        </h1>
        <h2>Create Exercise</h2>

        <FormGroup>
          <Label>Exercise</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Cycle</option>
            <option>Running</option>
            <option>Work Out</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>People</Label>
          <Input
            type="number"
            placeholder="number"
            name="people"
            noValidate
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Datetime">Exercise Time</Label>
          <Input
            type="datetime"
            name="datetime"
            id="exampleDatetime"
            placeholder="Exercise Time"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Date">Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input
            type="time"
            name="time"
            id="exampleTime"
            placeholder="time placeholder"
          />
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block">Register</Button>
      </Form>
    );
  }
}

export default Kakaoregister;
