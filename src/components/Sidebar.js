import React from 'react'
import '../App.css'
import '../bootstrap.css'

class Sidebar extends React.Component{
    constructor(props){
        super()
        this.state = {
            isSidebarOpen:false,
            trucks: props.trucks,
            currentLink : props.trucks[0].id,
            searchText:''
        }
    }

    toggleSidebar = () =>{
        this.setState(prevState=>{ return {isSidebarOpen:!prevState.isSidebarOpen}})
    }

    handleClick = (truck) =>{
        this.setState({currentLink:truck.id},this.props.handleTruckChange(truck))
    }

    searchHandle = (e) =>{
        const searchText = e.target.value
        const displayedTrucks = this.props.trucks.filter(truck => truck.name.toLowerCase().includes(searchText.toLowerCase()))
        this.setState({trucks:displayedTrucks,searchText})
    }

    render(){
        return(
            <div className='sidebardiv' style={{width: this.state.isSidebarOpen?'20vw':'0px'}}>
                <div className='sidebar' style={{width: this.state.isSidebarOpen?'20vw':'0px'}}>
                    <i className="fas fa-search icon"></i>
                    <input placeholder="search" className="searchbox" type='text' value = {this.state.searchText} onChange = {this.searchHandle}/>
                    <ul className='list-group'>
                    {this.state.trucks.map(truck =>{
                        return (
                        <li key={truck.id}>
                            <a
                                className='list-group-item sidebar-link' 
                                style={{backgroundColor: this.state.currentLink === truck.id ? 'whitesmoke' : ''}} href='# ' 
                                onClick = {()=>{this.handleClick(truck)}}
                            >
                                <span className={truck.status}></span>&nbsp;&nbsp;{truck.name}&nbsp;
                                <small className='text-muted'>{truck.number}</small>
                            </a>
                        </li>)
                    })}
                    </ul>
                </div>
                <button className='toggleButton' onClick={this.toggleSidebar}>{this.state.isSidebarOpen?<p>&#9666;</p>:<p>&#9656;</p>}</button>
            </div>
        )
    }
}

export default Sidebar