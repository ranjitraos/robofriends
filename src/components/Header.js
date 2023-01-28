import React from "react"
import CounterButton from "./CounterButton"


const Header = () => {
    return (
        <>
            <h1 className='f1'>RoboFriends - {process.env.REACT_APP_VERSION}</h1>
            <div><CounterButton /></div>
        </>
    )
}

export default React.memo(Header)