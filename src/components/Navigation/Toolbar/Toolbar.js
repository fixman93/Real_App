import React from 'react'

import Logo from '../../Logo/Logo'
import Style from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = () => (
    <header className={Style.Toolbar}>
        <div>MENU</div>
        <div className={Style.Logo}>
            <Logo />
        </div>
        <nav className={Style.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar