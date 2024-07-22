import React from 'react'
import './Transactioncard.css'
import Delete from './trash-bin.png'
import toast from 'react-hot-toast'
import axios from 'axios'

function Transactioncard({ _id, title, description, amount, category, type, createdAt, }) {

    const deletetransactions = async () => {
        if (!_id) {
          toast.error("Invalid transaction ID");
          return;
        }
        try {
          const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/transactions/${_id}`)
          toast.success(response.data.message)
        } catch (error) {
          toast.error("Failed to delete transaction!")
        }
        setTimeout(() => {
          window.location.href = '/'
        }, 1000);
       
      }

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
            <button onClick={deletetransactions} className='delete-btn'><img src={Delete} alt='' /></button>
        </div>
    )
}

export default Transactioncard