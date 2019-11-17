import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Button } from "react-mdl";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  CardImg
} from "reactstrap";
import Lectureregister from "./lectureregister";
import "./lectureregister.css";

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  teaturecard = props => {
    return (
      <div>
        <Row>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle>Jung Jin Woo</CardTitle>
                <CardSubtitle>Yoga</CardSubtitle>
              </CardBody>
              <CardImg
                width="100%"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS236JMxuVJsGe3Eg9ZGD1_usFHcYdFPEvK0ABXr9o4Yv9kJpg1&s"
                alt="Card image cap"
              />
              <CardBody>
                <CardText>Yoga King God General</CardText>
                <Button colored>home</Button>
                <Button colored>Subscribe</Button>
                <Button colored>Like</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <div>{this.teaturecard()}</div>;
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Pilates</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Home Training</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is G.X</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <Lectureregister />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Yoga</Tab>
          <Tab>Pilates</Tab>
          <Tab>Home Training</Tab>
          <Tab>G.X</Tab>
          <Tab>Lecture Register</Tab>
        </Tabs>
        <section className="teacher-grid">
          {/*this.toggleCategories()*/}
          <Grid className="teacher-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Teacher;
