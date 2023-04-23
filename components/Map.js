import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import { getCenter } from 'geolib';

import L from 'leaflet';

// Define the custom icon
const myIcon = L.icon({
    iconUrl: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMxXzU3X3gyQ19fVHdpdHRlcl94MkNfX0xvY2F0aW9uX3gyQ19fTWFwIj48Zz48cGF0aCBkPSJNMjU2LjA4LDU0Ljk5OWM4NC44NywwLDE1My44MSw2OC45NCwxNTMuODEsMTUzLjk2YzAsNzcuMDU5LTg3LjAyLDE5NS4wMy0xNTMuMiwyNDYuMDQgICAgYy04NS4zMy02OS4yNC0xNTQuNTgtMTY3Ljc1LTE1NC41OC0yNDYuMDRDMTAyLjExLDEyMy45MzgsMTcxLjA1LDU0Ljk5OSwyNTYuMDgsNTQuOTk5eiBNMzMwLjg3LDIwNS43OTggICAgYzAtNDEuMzQtMzMuNTIxLTc0Ljg2LTc0Ljg3LTc0Ljg2Yy00MS4zNSwwLTc0Ljg2LDMzLjUyLTc0Ljg2LDc0Ljg2YzAsNDEuMzUsMzMuNTEsNzQuODcsNzQuODYsNzQuODcgICAgQzI5Ny4zNSwyODAuNjY4LDMzMC44NywyNDcuMTQ4LDMzMC44NywyMDUuNzk4eiIgc3R5bGU9ImZpbGw6I0ZGNzk3OTsiLz48L2c+PC9nPjxnIGlkPSJMYXllcl8xIi8+PC9zdmc+",
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

function Map({searchResults}) {
    
    const [selectedLocation,setSelectedLocation]=useState({})
    
    const customIcon=new Icon({
        iconUrl: "../icons/map.png",
        iconSize: [38,38] //size of the icon 

    })
    
    // Transform the search results object into the
    // { latitude: 52.516272, longitude: 13.377722 }

    
    const coordinates=searchResults.map((result)=>({
        latitude: result.long,
        longitude: result.lat
    }))
    
    const center=getCenter(coordinates)
    
  return (
    <MapContainer  
    center={[center.longitude, center.latitude]}
  zoom={14}
//   scrollWheelZoom={false}
  style={{ height: "100%", width: "100%" }}
    >
    
    {searchResults.map((result)=>(
        <div className=''>
        <Marker  position={[result.lat, result.long]} draggable={true} animate={true} icon={myIcon} > 
        
        <Popup >{result.title}</Popup>
      </Marker>
        
        </div>
    ))}
        <TileLayer  
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
    </MapContainer>
  )
}

export default Map