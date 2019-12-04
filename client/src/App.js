import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  // 컴포넌트가 처음 실행될 때. 기본적으로 사용하는 것.
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  // 화면에 이렇게 만들겠다.
  render() {
    return (
      <div>
        <Layout>
          <Header title="G.X PLATFORM" scroll>
            <Navigation>
              <Link to="/">HOME</Link>
              <Link to="/teacher">TEACHER</Link>
              <Link to="/kakaomap">MAP</Link>
              <Link to="/login">LOGIN</Link>
              <Link to="/signup">SIGNUP</Link>
            </Navigation>
          </Header>
          <Drawer title="G.X Platform">
            <Navigation>
              <Link to="/">HOME</Link>
              <Link to="/teacher">TEACHER</Link>
              <Link to="/kakaomap">MAP</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
