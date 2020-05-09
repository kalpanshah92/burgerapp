import React, { Component } from 'react'
import Aux from './../../hoc123/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
            totalPrice: 4

        }
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
        
    }

    render() {
        return (
            <Aux>
                <Burger ingredient={this.state.ingredient} />
                 <BuildControls ingredientRemove = {this.removeIngredientHandler} ingredientAdded={this.addIngredientHandler}
                        price={this.state.totalPrice}/>
            </Aux>
        );
    }

}

export default BurgerBuilder;