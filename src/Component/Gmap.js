import * as React from 'react'
import ReactDOM from 'react-dom'
import { GiveMeMap } from 'react-give-me-map';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function Gmap() {
    // const [viewport, setViewport] = React.useState({
    //     latitude: 55.15,
    //     longitude: 15.02,
    //     zoom: 4.4
    // });
    return (
        <>
            {/* <GiveMeMap
                map={{
                    mapboxAccessToken: 'AIzaSyBilkZSQ3zdnt0-_QuyznlSiG2DS9q8ub4',
                    longitude: viewport.longitude,
                    latitude: viewport.latitude,
                    zoom: viewport.zoom,
                    onMove: (v) => {
                        setViewport({
                            latitude: -34.397,
                            longitude: 150.644,
                            zoom: v.viewState.zoom
                        })
                    },
                    style: {
                        width: 1000,
                        height: 400
                    },
                }}
                config={{
                    availableStyles: ['mapbox://styles/koudelka/cl6gs87ey002l15o9gnp7opx7']
                }}
            /> */}


            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
                </InfoWindow>
            </Map>
        </>
    )
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyBilkZSQ3zdnt0-_QuyznlSiG2DS9q8ub4")
  })(Gmap)