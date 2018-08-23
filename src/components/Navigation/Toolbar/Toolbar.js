import React from 'react'

import Logo from '../../Logo/Logo'
import Style from './Toolbar.css'

const toolbar = () => (
    <header className={Style.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
)

export default toolbar