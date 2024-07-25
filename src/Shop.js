import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney}= bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <div className="container my-3">
                <h2>Buy Shoes 50Rs</h2>
                {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}} >-</button>
                Buy this item
                <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}} >+</button> */}
                <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}} >-</button>
                Buy this item
                <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}} >+</button>
            </div>
        </div>
    )
}

export default Shop
