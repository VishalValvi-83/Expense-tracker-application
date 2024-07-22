import React, { useEffect, useState } from 'react'
import './Home.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import Transactioncard from '../../components/Transationcs/Transactioncard'
function Home() {
  const [user, setUser] = useState('')
  const [transaction, setTransaction] = useState([])

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
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/transactions?userId=${user._id}`)
    toast.dismiss()
    setTransaction(response.data.data)
  }

  useEffect(() => {
    loadTransactions()
  }, [user])




  return (<>
    <div>Welcome {user.fullName}
    </div>
    <button onClick={() => {
      localStorage.clear()
      toast.loading("Loging out")

      setTimeout(() => {
        window.location.href = '/'
      }, 2000)
    }} className='btn m-5'>
      Logout</button>
    <div className='container transaction-container w-75 my-0 mx-auto'>
      {
        transaction.map((transaction) => {
          const { _id, title, description, amount, category, type, createdAt } = transaction

          return (<Transactioncard
            key={_id}
            title={title}
            description={description}
            amount={amount}
            category={category}
            type={type}
            createdAt={createdAt}
          />)
        })
      }
    </div>



  </>)

}

export default Home