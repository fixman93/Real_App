import React, { Component } from 'react'
import axios from '../../../axios-order'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'

import Style from './ContactData.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
        const order = {
          ingredients: this.props.ingredients,
          price: this.props.price,
          customer: {
            name: "Boris Civcic",
            address: {
              street: "Brod",
              zipCode: "74450",
              country: "Serbia"
            },
            email: "civcicboris93@gmail.com"
          },
          deliveryMethod: "fastes"
        }
        axios.post('order.json', order)
          .then(response =>
            {
                this.setState( {loading: false } )
                this.props.history.push('/')
            } )
          .catch(error =>
            this.setState( {loading: false } )
          )
    }
    render() {
        let form = (
            <form>
                <input className={Style.Input} type="text" name="name" placeholder="Your name" />
                <input className={Style.Input} type="email" name="email" placeholder="Your email" />
                <input className={Style.Input} type="text" name="street" placeholder="Street" />
                <input className={Style.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        if ( this.state.loading ) {
            form = <Spinner />
        }
        return (
            <div className={Style.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData