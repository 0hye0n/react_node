import React, { Component } from "react";
// bootstrap
import { Card, CardTitle, CardText, Button } from "reactstrap";
import "./lectureregister.css";

class Kakaoregister extends Component {
  render() {
    return (
      <div>
        <div>
          <span className="font-weight-bold">Exercise List</span>
        </div>
        <div className="container">
          <Card body>
            <CardTitle>Cycle</CardTitle>
            <CardText>People: 4</CardText>
            <Button>Join</Button>
          </Card>
          <Card body>
            <CardTitle>Workout</CardTitle>
            <CardText>People: 4</CardText>
            <Button>Join</Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default Kakaoregister;
