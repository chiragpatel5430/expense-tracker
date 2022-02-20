import React from 'react'
import ExpenseList from '../../components/expense-list/expenselist'
import TopFold from '../../components/topfold/topfold'
import './home.css'

function Home() {
    return (
        <div className="home">
            <TopFold/>
            <ExpenseList/>
        </div>
    )
}

export default Home
