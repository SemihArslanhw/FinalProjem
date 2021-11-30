import {useEffect, useState} from 'react';
import ReactMapGL, { Marker , Popup} from 'react-map-gl';
import {Room} from "@material-ui/icons";

function Map({pins}) {

    const [showPopup, togglePopup] = useState(false);
    const [viewport, setViewport] = useState({
      latitude: 39,
      longitude: 35,
      zoom:4
    });
    
   useEffect(()=>{
     console.log(pins);
   },[pins])

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
           <Marker
          latitude={data?.lat}
          longitude={data?.long}
          offsetLeft={-viewport.zoom * 3.5}
          offsetTop = {-viewport.zoom * 7 }
          >
          <Room style={{fontSize:viewport.zoom * 7}} className="h-20 w-20 text-black"/>

          </Marker>
          )  
              
          
                
        })}
        </ReactMapGL>
  
      </div>
    )
}

export default Map
