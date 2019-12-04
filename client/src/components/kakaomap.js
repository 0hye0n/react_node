/*global kakao*/
import React, { Component } from "react";
import "./kakaomap.css";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import Kakaoregister from "./kakaoregister";
import Kakaojoin from "./kakaojoin";

class Kakaomap extends Component {
  state = { activeTab: 0, lat: "", long: "" };
  componentDidMount() {
    //동적 로딩
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=fba789bf140b6fc6a1e71b4b0495d609&autoload=false";
    document.head.appendChild(script);

    // 원래버전
    script.onload = () => {
      kakao.maps.load(() => {
        var el = document.getElementById("map");
        var map = new kakao.maps.Map(el, {
          center: new kakao.maps.Coords(499000.25, 1125000.75),
          level: 7
        });
        // var marker = new kakao.maps.Marker({});
        // marker.setMap(map);

        kakao.maps.event.addListener(map, "click", function(MouseEvent) {
          var latlng = MouseEvent.latLng;
          marker.setPosition(latlng);
          // var message = "위도: " + latlng.getLat() + ", ";
          // message += "경도: " + latlng.getLng();
          // var resultDiv = document.getElementById("clickLatlng");
          // resultDiv.innerHTML = message;
          var latitude = latlng.getLat();
          var longitude = latlng.getLng();
          var resultlat = document.getElementById("lat");
          var resultlong = document.getElementById("long");
          resultlat.innerHTML = latitude;
          resultlong.innerHTML = longitude;
        });

        var positions = [
          {
            title: "카카오",
            latlng: new kakao.maps.LatLng(33.450705, 126.570677)
          },
          {
            title: "생태연못",
            latlng: new kakao.maps.LatLng(33.450936, 126.569477)
          },
          {
            title: "텃밭",
            latlng: new kakao.maps.LatLng(33.450879, 126.56994)
          },
          {
            title: "근린공원",
            latlng: new kakao.maps.LatLng(35.451393, 126.570738)
          },
          {
            title: "근린공원",
            latlng: new kakao.maps.LatLng(35.461393, 121.570738)
          },
          {
            title: "근린공원",
            latlng: new kakao.maps.LatLng(37.451393, 126.570738)
          },
          {
            title: "근린공원",
            latlng: new kakao.maps.LatLng(38.451393, 126.570738)
          },
          {
            title: "근린공원",
            latlng: new kakao.maps.LatLng(33.451393, 126.570738)
          },
          {
            title: "근린공원",
            latlng: new kakao.maps.LatLng(37.56111, 126.570738)
          },
          {
            title: "근린공원",
            latlng: new kakao.maps.LatLng(33.451393, 126.570738)
          },
          {
            title: "근린공원",
            latlng: new kakao.maps.LatLng(37.533386, 126.570738)
          }
        ];
        var clusterer = new kakao.maps.MarkerClusterer({
          map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
          averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel: 10 // 클러스터 할 최소 지도 레벨
        });
        var markers = [];
        for (var i = 0; i < positions.length; i++) {
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          });
          markers.push(marker);
        }
        clusterer.addMarkers(markers);
      });
    };
  }

  kakaoregister = () => {
    if (this.state.activeTab === 0) {
      return (
        <div>
          {this.componentDidMount()}{" "}
          <h2>
            <span className="font-weight-bold">Register Exercise!</span>
            <div>
              <span className="font-weight-bold">Find Exercise!</span>
            </div>
          </h2>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Kakaoregister />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>
            <Kakaojoin />
          </h1>
        </div>
      );
    }
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Grid className="demo-grid-2" noSpacing="false">
          <Cell col={8}>
            <div className="kakaomap" id="map">
              <div
                style={{ position: "fixed", bottom: "80px", right: "150px" }}
                id="lat"
              ></div>
              <div
                style={{ position: "fixed", bottom: "60px", right: "150px" }}
                id="long"
              ></div>
            </div>
          </Cell>
          <Cell col={4}>
            <div className="category-tabs">
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
                <Grid className="teacher-grid">
                  <Cell col={12}>
                    <div className="content">{this.kakaoregister()}</div>
                  </Cell>
                </Grid>
              </section>
            </div>
          </Cell>
        </Grid>
      </div>
      // <div className="kakaomap" id="map">
      // <div
      //   style={{ position: "fixed", bottom: "80px", right: "150px" }}
      //   id="lat"
      // ></div>
      // <div
      //   style={{ position: "fixed", bottom: "60px", right: "150px" }}
      //   id="long"
      // ></div>
      //   <div
      //     style={{ position: "fixed", top: "75px", right: "85px" }}
      //     className="category-tabs"
      //   >
      // <Tabs
      //   activeTab={this.state.activeTab}
      //   onChange={tabId => this.setState({ activeTab: tabId })}
      //   ripple
      // >
      //   <Tab>Home</Tab>
      //   <Tab>Register</Tab>
      //   <Tab>Join</Tab>
      // </Tabs>
      // <section className="teacher-grid">
      //   <Grid className="teacher-grid">
      //     <Cell col={12}>
      //       <div className="content">{this.kakaoregister()}</div>
      //     </Cell>
      //   </Grid>
      // </section>
      //   </div>
      // </div>
    );
  }
}

export default Kakaomap;
