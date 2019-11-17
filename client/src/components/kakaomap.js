/*global kakao*/
import React, { Component } from "react";
import "./kakaomap.css";

class Kakaomap extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=fba789bf140b6fc6a1e71b4b0495d609&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        var el = document.getElementById("map");
        var map = new kakao.maps.Map(el, {
          center: new kakao.maps.Coords(523951.25, 1085073.75)
        });
        var marker = new kakao.maps.Marker({
          position: map.getCenter()
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
  }

  render() {
    return (
      <div className="kakaomap" id="map">
        <div
          style={{ position: "fixed", bottom: "0px", right: "0px" }}
          id="clickLatlng"
        ></div>
      </div>
    );
  }
}

export default Kakaomap;
