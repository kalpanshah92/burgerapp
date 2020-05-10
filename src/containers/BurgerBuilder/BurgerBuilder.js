import React, { Component } from 'react'
import Aux from './../../hbc/Aux1'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchaseable: false,
            purchaseing: false

        }
    }

    purchaseHandler = () => {
        this.setState({purchaseing: true});
    }

    PurchaseCancelHandler = () => {
        this.setState({purchaseing: false});
    }

    updatePurchaseState(ingerdient) {
        

        const sum = Object.keys(ingerdient)
                    .map(ctrl =>{
                        return ingerdient[ctrl];
                    })
                    .reduce((sum,el) => {
                        return sum + el;    
                    },0);

                    this.setState({purchaseable: sum> 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredient};
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredient: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0)
        {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredient};
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredient: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        return (
            <Aux>
                <Model show={this.state.purchaseing} modelClosed={this.PurchaseCancelHandler}>
                    <OrderSummary ingredients = {this.state.ingredient}/>
                </Model>
                <Burger ingredient={this.state.ingredient} />
                 <BuildControls 
                 ingredientRemove = {this.removeIngredientHandler} 
                 ingredientAdded={this.addIngredientHandler}
                 price={this.state.totalPrice}
                 purchaseable={this.state.purchaseable}
                 ordered = {this.purchaseHandler}
                 />
            </Aux>
        );
    }

}

export default BurgerBuilder;