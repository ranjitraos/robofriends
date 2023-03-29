import React from "react"
import CounterButton from "./CounterButton"
import CounterButton2 from "./CounterButton2"


const Header = () => {
    return (
        <>
            <h1 className='f1'>RoboFriends - {process.env.REACT_APP_VERSION}</h1>
            <div><CounterButton /></div>
            <div><CounterButton2 /></div>
        </>
    )
}

export default React.memo(Header)