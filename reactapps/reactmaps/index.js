import React, { Component, Fragment } from 'react';
import mapboxgl from "mapbox-gl";
const storeUrl = "https://brewmusepk.herokuapp.com/store";
mapboxgl.accessToken = "";

class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: "",
            filter: "",
            zoom: 3
        }
        this.mapContainer = React.createRef();
    }

    render() {
        console.log("filter data>>>", this.state.filter)
        return (
            <Fragment>
                <center><h2>Location App</h2></center>
                <div ref={this.mapContainer} className="map-container" />
                <hr/>
            </Fragment>
        )
    }
    componentDidMount() {
        fetch(storeUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data => {
                this.setState({ coords: data,filter:data});
                const map = new mapboxgl.Map({
                    container: this.mapContainer.current,
                    style: 'mapbox://styles/developerfunnel/cl3a8tf1z000j14qqldcidha1',
                    center: [78.96288, 20.593684],
                    zoom: this.state.zoom
                });
                data.map((element) => {

                    let latitude = element.lat;

                    let longitude = element.lon;
                    new mapboxgl.Marker({
                        draggable: false,
                        color: "#1a9e1a"
                    })
                        .setLngLat([longitude, latitude])
                        .setPopup(
                            new mapboxgl.Popup({ offset: 25 }) // add popups
                              .setHTML(
                                `<p>${element.name}</p>`
                              )
                          )
                        .addTo(map)
                })
            }))
        

    }
}
export default Store;
