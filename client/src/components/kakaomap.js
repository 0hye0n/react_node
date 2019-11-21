/*global kakao*/
import React, { Component } from "react";
import "./kakaomap.css";
import { Tabs, Tab, Grid, Cell, Button } from "react-mdl";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import Kakaoregister from "./kakaoregister";

class Kakaomap extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  componentDidMount() {
    //동적 로딩
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=fba789bf140b6fc6a1e71b4b0495d609&autoload=false&libraries=clusterer";
    document.head.appendChild(script);

    // 원래버전
    script.onload = () => {
      kakao.maps.load(() => {
        var el = document.getElementById("map");
        var map = new kakao.maps.Map(el, {
          center: new kakao.maps.Coords(523951.25, 1085073.75)
        });

        var marker = new kakao.maps.Marker({
          //position: map.getCenter()
          //position: markerPosition,
          //image: markerImage
        });

        marker.setMap(map);

        kakao.maps.event.addListener(map, "click", function(MouseEvent) {
          var latlng = MouseEvent.latLng;
          marker.setPosition(latlng);

          var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
          message += "경도는 " + latlng.getLng() + " 입니다";

          var resultDiv = document.getElementById("clickLatlng");
          resultDiv.innerHTML = message;
        });
      });
    };

    // const script2 = document.createElement("script");
    // script2.async = true;
    // script2.src =
    //   "https://dapi.kakao.com/v2/maps/sdk.js?appkey=fba789bf140b6fc6a1e71b4b0495d609&libraries=services,drawing";

    // script2.onload = () => {
    //   var el = document.getElementById("map");
    //   var map = new kakao.maps.Map(el);
    //   // 마커이미지 바꾸기
    //   var imageSrc =
    //       "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
    //     imageSize = new kakao.maps.Size(64.69),
    //     imageOption = { offset: new kakao.maps.Point(27, 69) };

    //   var markerImage = new kakao.maps.markerImage(
    //     imageSrc,
    //     imageSize,
    //     imageOption
    //   );
    //   var marker = new kakao.maps.Marker({
    //     position: map.getCenter(),
    //     // position: markerPosition,
    //     image: markerImage
    //   });

    //   //마커 인포윈도우 띄우기
    //   var iwContent = '<div style="padding:5px;">Hello World!</div>';
    //   var infowindow = new kakao.maps.Infowindow({
    //     content: iwContent
    //   });
    //   kakao.maps.event.addListener(marker, "mouseover", function() {
    //     infowindow.open(map, marker);
    //   });
    //   kakao.maps.event.addListener(marker, "mouseout", function() {
    //     infowindow.close();
    //   });
    // };
  }

  kakaoregister() {
    if (this.state.activeTab === 0) {
      return <div>{this.componentDidMount()}</div>;
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Kakaoregister />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Exercise Join Page</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="kakaomap" id="map">
        <div
          style={{ position: "fixed", bottom: "50px", right: "150px" }}
          id="clickLatlng"
        ></div>
        <div
          style={{ position: "fixed", top: "75px", right: "250px" }}
          className="category-tabs"
        >
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Home</Tab>
            <Tab>Register</Tab>
            <Tab>Join</Tab>
          </Tabs>
          <section className="teacher-grid">
            {/*this.toggleCategories()*/}
            <Grid className="teacher-grid">
              <Cell col={12}>
                <div className="content">{this.kakaoregister()}</div>
              </Cell>
            </Grid>
          </section>
        </div>
      </div>

      // <div>
      //   <Container fluid>
      //     <Row>
      //       <Col xs="6" className="kakaomap" id="map"></Col>
      //       <Col xs="6">
      //         <Nav tabs>
      //           <NavItem>
      //             <NavLink
      //               activeTab={this.state.activeTab}
      //               onchange={tabId => this.setState({ activeTab: tabId })}
      //               ripple
      //             >
      //               Home
      //             </NavLink>
      //           </NavItem>
      //           <NavItem>
      //             <NavLink
      //               activeTab={this.state.activeTab}
      //               onchange={tabId => this.setState({ activeTab: tabId })}
      //               ripple
      //             >
      //               Register
      //             </NavLink>
      //           </NavItem>
      //           <NavItem>
      //             <NavLink
      //               activeTab={this.state.activeTab}
      //               onchange={tabId => this.setState({ activeTab: tabId })}
      //               ripple
      //             >
      //               Join
      //             </NavLink>
      //           </NavItem>
      //         </Nav>
      //         <TabContent>
      //           <TabPane tabId="0">
      //             <div id="clickLatlng"></div>
      //             <div className="content">{this.kakaoregister()}</div>
      //           </TabPane>
      //         </TabContent>
      //       </Col>
      //     </Row>
      //   </Container>
      // </div>
    );
  }
}

export default Kakaomap;
