import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../withErrorHandler/withErrorHandler'
import axios from '../../axios-order'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}
class BurgerBulder extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {...}
    // } this is old way
    // this is new way
    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        //console.log('ovo je', this.props)
        axios.get('https://burgermenu-f2f26.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    updatePurchasable (ingredients) {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el
        }, 0)
        this.setState({purchaseable: sum > 0})
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if ( oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState( { totalPrice: newPrice, ingredients: updateIngredients } )
        this.updatePurchasable(updateIngredients)
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState( { totalPrice: newPrice, ingredients: updateIngredients } )
        this.updatePurchasable(updateIngredients)
    }

    purchaseHandler = () => {
        this.setState( { purchasing: true } )
    }

    purchaseCancelHandler = () => {
        this.setState( {purchasing: false } )
    }

    purchaseContinueHandler = () => {
        //alert('You continue!')
        
        const queryParms = []
        for (let i in this.state.ingredients) {
            queryParms.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParms.push('price=' + this.state.totalPrice)
        const queryString = queryParms.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null
        let burger = this.state.error ? <p>ingredients can't be loaded</p> : <Spinner />

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients = {this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientsHandler}
                        removedingredient={this.removeIngredientsHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchaseable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice}
                    />
                </Aux>
            )
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler} />
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                  {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBulder, axios)
