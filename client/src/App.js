import React, { Component } from "react";
import "./App.css";

// mdl
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="G.X Platform" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/teacher">Teacher</Link>
              <Link to="/kakaomap">Kakaomap</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </Navigation>
          </Header>
          <Drawer title="G.X Platform">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/teacher">Teacher</Link>
              <Link to="/kakaomap">Kakaomap</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
