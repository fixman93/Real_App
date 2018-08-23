import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Style from './SideDraw.css'
import BackDrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const sideDraw = (props) => {
    let attachedClasses = [Style.SideDraw, Style.Close]
    if (props.open) {
        attachedClasses = [Style.SideDraw, Style.Open]
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join( ' ' )}>
                <div className={Style.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDraw