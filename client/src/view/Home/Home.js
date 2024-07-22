import React, { useEffect, useState } from 'react'
import './Home.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import Transactioncard from '../../components/Transationcs/Transactioncard'
import Addtransaction from '../Add/Addtransaction'
import Navbar from '../../components/Navbar/Navbar'
function Home() {
  const [user, setUser] = useState('')
  const [transaction, setTransaction] = useState([])
  const [totalIncome, setTotalIncome] = useState()
  const [totalExpense, setTotalExpense] = useState()

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser) {
      setUser(currentUser)
    }

    if (!currentUser) {
      window.location.href = '/login'
    }

  }, [])

  const loadTransactions = async () => {

    if (!user._id) {
      return
    }
    toast.loading("Loding Transactions")
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}transactions?userId=${user._id}`)
    toast.dismiss()
    setTransaction(response.data.data)
  }

  useEffect(() => {
    loadTransactions()
  }, [user])

  useEffect(() => {
    let income = 0
    let expense = 0
    transaction.forEach((transaction) => {
      if (transaction.type === 'credit') {
        income += transaction.amount
      } else {
        expense += transaction.amount
      }
    })
    setTotalIncome(income)
    setTotalExpense(expense)
  },[transaction])


  return (<>
  <Navbar user={user} />
    <div className='main mt-4 d-flex flex-wrap'>
      <Addtransaction user={user} />
      <div className='dash-transaction-cotainer'>
        <div className='dashboard mb-3' >
          <h3 className='mb-3 form-heading text-light mt-2 text-center'>Dashboard</h3>
          <div className='amount-container'>
            <p className='income '>
              <span>Total Income: </span> <br /> {"₹" + totalIncome}</p>

            <p className='expense '>
              <span>Total Expense: </span> <br />
              {"₹" + totalExpense}</p>
            <p className='total-balance '>{totalIncome - totalExpense > 0 ? "Net Income : " : "Net Loss: "}  <br />
              ₹{totalIncome - totalExpense} </p>
          </div>
        </div>
        <h3 className='text-center form-heading text-light'>Transactions </h3>
        <div className='transaction-container '>
          {
            transaction.map((transaction) => {
              const { _id, title, description, amount, category, type, createdAt } = transaction

              return (<Transactioncard
                _id={_id}
                title={title}
                description={description}
                amount={amount}
                category={category}
                type={type}
                createdAt={createdAt}
                loadTransactions={loadTransactions}
              />)
            })
          }
        </div>
      </div>
    </div>

  </>)

}

export default Home