import React from "react"


const Header = () => {
    return <h1 className='f1'>RoboFriends - {process.env.REACT_APP_VERSION}</h1>
}

export default React.memo(Header)