import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Icon from '../images/location-pin.svg'
 
export class MapContainer extends React.Component {

    constructor(props){
        super()
        this.state = {
            truck : props.truck
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.truck.id !== this.props.truck.id){
            this.setState({truck:this.props.truck})
        }
    }

    render() {
        return (
        <Map google={this.props.google} zoom={14}
            initialCenter = {{lat:this.props.truck.location.lat,lng:this.props.truck.location.lng}}
            center={{
                lat: this.state.truck.location.lat,
                lng: this.state.truck.location.lng
            }}
        mapTypeControl = {false}
        streetViewControl = {false}>
    
            <Marker onClick={this.onMarkerClick}
                    title={this.state.truck.name}
                    position={{lat: this.state.truck.location.lat, lng: this.state.truck.location.lng}}
                    icon={{
                        url: Icon,
                        scaledSize:  new this.props.google.maps.Size(35,35)
                    }}/>
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                <h1>place</h1>
                </div>
            </InfoWindow>
        </Map>
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)