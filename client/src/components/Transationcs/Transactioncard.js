import React from 'react'
import './Transactioncard.css'
function Transactioncard({ _id, title, description, amount, category, type, createdAt }) {
    return (
        <div className='transaction-card row mb-3'>
            <div className='col-lg-3 col-sm-6 transaction-title'>
                <h4>{title}</h4>
                <span className='transaction-date'> {new Date(createdAt).toLocaleString()}</span>
            </div>
            <div className='col-lg-4 col-sm-6 text-center'>
                <p className='mt-1 transaction-description'>{description}</p>
                <span className='transaction-category'>{category}</span>
            </div>
            <div className='col-lg-4 col-sm-6 text-center '>
                <span className={`fs-5 fw-bold ${type === 'credit' ? "text-success" : "text-danger"}`}>
                    {type === 'credit' ? "+ " : "- "}
                    {"₹" + amount}
                    <span className='fs-6'> {type + "ed"}</span>
                </span>
            </div>
        </div>
    )
}

export default Transactioncard