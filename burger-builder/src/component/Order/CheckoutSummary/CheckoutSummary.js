import React, { Component } from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {

    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it taste well!</h1>
            <div style={{width:'100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType='Success'
                clicked={props.continueCheckout}
                >CONTINUE
            </Button>
            <Button 
                btnType='Danger'
                clicked={props.cancelCheckout}
            >CANCEL</Button>
        </div>
    )
}

export default checkoutSummary;