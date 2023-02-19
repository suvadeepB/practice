import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon, Polyline, Circle } from 'google-maps-react';

export class MapContainer extends Component {


    render() {
        const triangleCoords = [
            // { lat: 25.774, lng: -80.190 },
            // { lat: 18.466, lng: -66.118 },
            // { lat: 32.321, lng: -64.757 },
            // { lat: 25.774, lng: -80.190 }

            { lat: 22.533333, lng: 88.366667 },
            { lat: 22.517618, lng: 88.38405 },
            { lat: 22.566039, lng: 88.378127 },
            { lat: 22.533333, lng: 88.366667 }


        ];
        // const coords = { lat: 22.567470, lng: 88.377420 };

        return (
            // <Map google={this.props.google} zoom={14}>

            //     <Marker onClick={this.onMarkerClick}
            //         name={'Current location'} />

            //     <InfoWindow onClose={this.onInfoWindowClose}>

            //     </InfoWindow>
            //     <Polyline
            //         path={triangleCoords}
            //         strokeColor="#000"
            //         strokeOpacity={1}
            //         strokeWeight={2} />

            // </Map>

            <Map google={this.props.google}
                style={{ width: '100%', height: '100%', position: 'relative' }}
                className={'map'}
                zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <Polygon
                    paths={triangleCoords}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                    fillColor="#0000FF"
                    fillOpacity={0.35} />
            </Map>

            // <Map
            //     initialCenter={coords}
            //     google={this.props.google}
            //     style={{ width: '100%', height: '100%', position: 'relative' }}
            //     zoom={14}
            // >
            //     <Circle
            //         radius={1200}
            //         center={coords}
            //         onMouseover={() => console.log('mouseover')}
            //         onClick={() => console.log('click')}
            //         onMouseout={() => console.log('mouseout')}
            //         strokeColor='transparent'
            //         strokeOpacity={0}
            //         strokeWeight={5}
            //         fillColor='#FF0000'
            //         fillOpacity={0.2}
            //     />
            // </Map>



        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBilkZSQ3zdnt0-_QuyznlSiG2DS9q8ub4")
})(MapContainer)