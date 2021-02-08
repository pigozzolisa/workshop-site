
import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const API_KEY = 'AIzaSyB_dgZnBaGT1Cc5n_tmpKVoO_MMGmv1TrA';

const loadJS = (src) => {
  const ref = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
};

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    if (window.google) {
      // script has been loaded already
      this.initMap();
    } else {
      window.initMap = this.initMap;
       loadJS(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&v=3`);
    }
  }

  initMap() {
    const g = window.google;
    const map = new g.maps.Map(this.mapRef.current, {
      zoom: 17,
      center: {
        lat: 45.161712,lng: 11.4518353
      },
    });
    /* draw markers or polygon here */
  }

  render() {
    return (
      <div style={{ width: 500, height: 500 }} ref={this.mapRef}>
        {/* map rendered here */}
      </div>
    );
  }
}
// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {
//    initMap() {
//     const merlara = { lat: 45.161712,lng: 11.4518353 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 14,
//       center: merlara,
//     });
//     const contentString =
//       '<div id="content">' +
//       '<h1 id="firstHeading" class="firstHeading">Merlara</h1>' +
//       "<p><b>via Stradona, 808</b></p>" +
//       "</div>";
//     const infowindow = new google.maps.InfoWindow({
//       content: contentString,
//     });
//     const marker = new google.maps.Marker({
//       position: merlara,
//       map,
//       title: "Autofficina",
//     });
//     marker.addListener("click", () => {
//       infowindow.open(map, marker);
//     });
//   }
//   render() {

//     return (
//       <Map 
//         visible={true}
//         google={this.props.google}
//         // onReady={this.initMap}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: 45.161712,lng: 11.4518353
//           }
//         }
//       />
 
//     );
//   }
// }

// // export class MapContainer extends Component {

// //   state = {
// //       selectedPlace: ''
// //   }

// //   onMarkerClick = (e) => {
// //       this.setState({selectedPlace: e.Name});
// //   }
// //   render() {
// //     return (
// //       <div style={{width: '10%', height: '10%'}}>
// //         <Map google={window.google} zoom={14} initialCenter={{
// //           lat: 45.161712,lng: 11.4518353}}>
// //         </Map>
// //       </div>
// //     )
// //   }
// // }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyB_dgZnBaGT1Cc5n_tmpKVoO_MMGmv1TrA',
//   language: 'IT'
  
// })(MapContainer);

