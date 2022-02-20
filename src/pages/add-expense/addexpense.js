import React from 'react'
import AddForm from '../../components/add-form/addform'
import TopFold from '../../components/topfold/topfold'
import './addexpense.css'

function AddExpense() {
    return (
        <div className="add-expense">
            <TopFold/>
            <AddForm/>
        </div>
    )
}

export default AddExpense
