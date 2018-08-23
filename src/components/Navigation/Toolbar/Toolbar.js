import React from 'react'

import Logo from '../../Logo/Logo'
import Style from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className={Style.Toolbar}>
        <DrawToggle clicked={props.drawerToggleClicked} />
        <div className={Style.Logo}>
            <Logo />
        </div>
        <nav className={Style.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar