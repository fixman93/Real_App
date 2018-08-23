import React from 'react'

import Style from './DrawToggle.css'

const drawerToggle = (props) => (
    <div className={Style.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle