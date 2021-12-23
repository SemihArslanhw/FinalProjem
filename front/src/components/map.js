import {useEffect, useState} from 'react';
import ReactMapGL, { Marker , Popup} from 'react-map-gl';
import {Room} from "@material-ui/icons";
import * as api from '../api/index';

function Map({pins}) {
    
    const [userPosition, setUserPosition] = useState();

    const [viewport, setViewport] = useState({
      latitude: 39,
      longitude: 35,
      zoom:4
    });
    
   useEffect(()=>{
     console.log(pins);
     navigator.geolocation.getCurrentPosition(showPosition);
     
   },[pins])
   
    
   const showPosition = (position) => {
     console.log(position.coords);
     pins.push({
       long: position.coords.latitude,
       lat: position.coords.longitude,
       BranchName: "Konumum",
   })  
  }
  

   const handleMarkerClick = (lat,long) =>{
     setViewport({
       latitude:lat,
       longitude:long,
       zoom:17
     })
   }

    return (
        <div className="h-full w-full">
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle="mapbox://styles/semiharslanhw/cku9yduu72ch917mwngkd5uwo"
          >
        {pins?.map((data)=>{
          
        return(
         <div> <Marker
          latitude={data?.long}
          longitude={data?.lat}
          offsetLeft={-viewport.zoom * 3.5}
          offsetTop = {-viewport.zoom * 7 }
          >
          <Room onClick={()=>handleMarkerClick(data?.long,data?.lat)} style={{fontSize:viewport.zoom * 7 , cursor:'pointer' }} className="h-20 w-20 z-50 text-red-600" />
          <p className='cursor-pointer hover:text-blue-600 transition-all border-black  text-black z-20'>{data?.BranchName}</p>
          
          </Marker>
          </div>
          )  
              
          
                
        })}
      
        </ReactMapGL>
  
      </div>
    )
}

export default Map
