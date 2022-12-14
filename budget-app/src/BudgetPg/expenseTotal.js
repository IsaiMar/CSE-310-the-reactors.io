import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import {getHousing, getFoodGroceries, getSavings, getEmergencyFund, getTransportation, getUtilities} from '../utils/getMethods';

	
const ExpenseTotal = (props) => {
	// const [rent, setRent] = useState([]);
    // const [food, setFood] = useState([]);
    // const [saving, setSaving] = useState([]);
    // const [emerge, setEmerge] = useState([]);
    // const [transport, setTransport] = useState([]);
    // const [util, setUtil] = useState([]);

    // /**************************************************************************
    //  * USE EFFECTS
    //  * These functions allow for the retrieval of the data from the database
    //  * Also it allows us to put information into the database as well.
    // **************************************************************************/
    // useEffect(() => {
    //     getHousing().then(setRent)
    // }, [])

    // useEffect(() => {
    //     getFoodGroceries().then(setFood)
    // }, [])
    // useEffect(() => {
    //     getSavings().then(setSaving)
    // }, [])
    // useEffect(() => {
    //     getEmergencyFund().then(setEmerge)
    // }, [])
    // useEffect(() => {
    //     getTransportation().then(setTransport)
    // }, [])
    // useEffect(() => {
    //     getUtilities().then(setUtil)
    // }, [])
	const { expenses } = useContext(AppContext);


	// const totalExpenses = expenses.reduce((total, item) => {
	// 	return (total = props.totalExpense);
	// }, 0);
	return (
		<div className='alert alert-primary'>
			<span>Spent so far: ${props.totalExpense}</span>
		</div>
	);
};

export default ExpenseTotal;