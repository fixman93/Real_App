import React from 'react'

import burgerLogo from '../../assets/images/burger-logo.png'
import Style from './Logo.css'

const logo  = () => (
    <div className={Style.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
)

export default logo