import React from 'react'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

import classes from './Modal.css'
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={classes.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-1000)',
        opacity: props.show ? '1' : '0',
        display: props.show ? 'block' : 'none'
    }}>
        {props.children}
    </div>
    </Aux>
)

export default modal