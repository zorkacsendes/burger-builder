import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
//this could be a functional component, doesnt have to be a class
class OrderSummary extends Component {

  componentWillUpdate() {
    console.log('[OrderSummary] will update');
  }

  render () {

    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return ( <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li> );
      });

    return (
      <Aux>
        <h3>Your order</h3>
        <p>Delicious burger with the following orders:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {this.props.price.toFixed(2)} $</strong></p>
        <p>Continue to checkout?</p>
        <Button
          btnType="Danger"
          clicked={this.props.cancel}>Cancel</Button>
        <Button btnType="Success"
                clicked={this.props.continue}>Continue</Button>
      </Aux>
    );
  }
}
export default OrderSummary;