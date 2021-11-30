import React from 'react'

function RequiredInfcomp(props) {
    return (
        <div className="flex flex-col">
            
            <input onChange={props.onChange} ref={props.refer}  placeholder={props.placeholder} className="p-4 m-4 border-2 outline-none"></input>
        </div>
    )
}

export default RequiredInfcomp
