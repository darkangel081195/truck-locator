import React from 'react'
import MapContainer from './Map'
import Sidebar from './Sidebar'
import truckData from './truckData.json'

class ListTrucks extends React.Component{

    constructor(){
        super()
        this.state={
            truckList : truckData,
            truckMarker : truckData[0]
        }
    }

    navigate=(truck)=>{
        this.setState({truckMarker : truck})
    }

    handleTruckChange = (truck) =>{
        this.setState({truckMarker:truck})
    }

    render(){
        return(
            <div>
                <Sidebar trucks = {this.state.truckList} handleTruckChange = {this.handleTruckChange}/>
                <MapContainer style={{zIndex:-1}} truck={this.state.truckMarker} height='100vh' zoom={16} />
            </div>
        )
    }
}

export default ListTrucks