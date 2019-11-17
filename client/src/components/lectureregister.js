import React, { Component } from "react";
// bootstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./lectureregister.css";
//import axios from "axios";

class Lectureregister extends Component {
  // axios post 요청
  //   state = {
  //     selecttedFile: null
  //   };

  //   fileSelectedHandler = event => {
  //     this.setState({
  //       selecttedFile: event.target.files[0]
  //     });
  //   };

  //   fileUploadHandler = () => {
  //     const fd = new FormData();
  //     fd.append("image", this.state.selecttedFile, this.state.selecttedFile.name);
  //     axios.post();
  //   };

  render() {
    return (
      <Form
        className="lectureregister-form"
        onSubmit={this.handleSubmit}
        noValidate
      >
        <h1>
          <span className="font-weight-bold">Lecture Register</span>
        </h1>
        <h2>Create Lecture</h2>
        <FormGroup>
          <Label>Image</Label>
          <Input
            type="file"
            placeholder="Image"
            name="Image"
            noValidate
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Exercise</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Yoga</option>
            <option>Pilates</option>
            <option>Home Training</option>
            <option>G.X</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Curriculum</Label>
          <Input
            type="textarea"
            placeholder="Curriculum"
            name="Curriculum"
            noValidate
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button className="btn-lg btn-dark btn-block">Register</Button>
      </Form>
    );
  }
}

export default Lectureregister;
