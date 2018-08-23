import React from 'react';
import Aux from '../../hoc/Aux'

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDraw from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDraw />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout