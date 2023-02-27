import React from 'react'
import "./SideBarOption.scss"

function SideBarOption({text , Icon}) {
    return (
        <div className='sideBarOption'>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SideBarOption
