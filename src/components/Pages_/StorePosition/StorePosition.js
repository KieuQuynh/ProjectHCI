import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import Banner from '../../Share/TitlePageParralax/TitlePageParralax'
class StorePosition extends Component {
  render() {
    return (
      <div>
        <Banner title={'Store Location'} />
        <div className="map" style={{ minHeight: '764px', margin: '0 auto', width: '80%', marginTop: '40px' }}>
          <h1 style={{ width: '32%', fontSize: '30px' }}>FLASH STORE LOCATION</h1>
          <Map
            google={this.props.google}
            zoom={14}
            style={{ width: '80%', height: '764px' }}
            initialCenter={{
              lat: 20.995853,
              lng: 105.570286
            }}
          >
            <Marker onClick={this.onMarkerClick} name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAdWPKj7IodkZO9Et8_L_6fc5xc8BaxODo'
})(StorePosition)
