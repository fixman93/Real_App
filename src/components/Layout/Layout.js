import React, { Component} from 'react'
import Aux from '../../hoc/Aux'

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDraw from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDraw: true
    }
    sideDrawCloseHandler = () => {
        this.setState({showSideDraw: false})
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDraw 
                open={this.state.showSideDraw} 
                closed={this.sideDrawCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout