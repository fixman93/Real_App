import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Style from './SideDraw.css'

const sideDraw = (props) => {
    return (
        <div className={Style.SideDraw}>
            <div className={Style.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDraw