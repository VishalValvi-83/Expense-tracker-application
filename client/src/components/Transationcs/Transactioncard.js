import React from 'react'
import './Transactioncard.css'
function Transactioncard({ _id, title, description, amount, category, type, createdAt }) {
    return (
        <div className='transaction-card row mb-3'>
            <div className='col-lg-4 col-sm-6 transaction-title'>
                <h3>{title}</h3>
                <p className='transaction-date'> {new Date(createdAt).toLocaleString()}</p>
            </div>
            <div className='col-lg-4 col-sm-6 text-center'>
                <p className='transaction-description'>{description}</p>
                <p className='fs-6 transaction-category'>{category}</p>
            </div>
            <div className=' col-lg-4 col-sm-6 text-center '>
                <span className={`fs-4 fw-bold ${type === 'credit' ? "text-success" : "text-danger"}`}>
                    {type === 'credit' ? "+" : "-"}  {amount}
                    <p className='fs-5'>{type + "ed"}</p>
                </span>
            </div>
        </div>
    )
}

export default Transactioncard