import { useState } from 'react'
import './Addtransaction.css'
import axios from 'axios'
import toast from 'react-hot-toast'

function Addtransaction({user}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')


    const addTransaction = async ()=>{
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/transactions?userId=${user._id}`,{
            title,
            description,
            amount,
            category,
            type,
            user : user._id
        })
        if(!response.data.success){
            toast.error("Please fill all field")
            return
        }
        toast.success(response.data.message)

        setTimeout(() => {
            window.location.href = '/'
        }, 1000);
        setAmount(0)
        setTitle('')
        setDescription('')
        setCategory('')
        setType('')

    }

    return (
       
            <div className='signup-form add-transaction-from'>
                <h1 className='form-heading  my-2'>Add Transaction for {user.fullName }</h1>

                <div className="form-floating mb-3">
                    <input type='text' className="form-control" id="floatingInput" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label for="floatingInput">Title:</label>

                </div>
                <div className="form-floating mb-3">
                    <input type='text' className="form-control" id="floatingInput" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <label for="floatingInput">Description:</label>


                </div>
                <div className="form-floating mb-3">
                    <input type='number' className="form-control" id="floatingInput" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <label for="floatingInput">Amount:</label>

                </div>
                <div className="form-control mb-3">
                    <label className='form-label'>Category</label>
                    <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option >Select Category</option>
                        <option value='groceries'>Groceries</option>
                        <option value='rent'>Rent</option>
                        <option value='miscellaneous'>Parlor</option>
                        <option value='haircut'>Hair cut</option>
                        <option value='utilities'>Utilities</option>
                        <option value='transportation'>Transportation</option>
                        <option value='clothes'>Clothes</option>
                        <option value='savings'>Savings</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='healthcare'>Healthcare</option>
                        <option value='education'>Education</option>
                        <option value='salary'>Salary</option>
                        <option value='personal'>Personal</option>
                    </select>
                </div>
                <div className="form-control mb-3">
                    <label htmlFor='type'>Type:</label>
                    <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                        <option >Select Type</option>
                        <option value='debit'>Expense</option>
                        <option value='credit'>Income</option>
                    </select>
                </div>

                <button className='btn' onClick={addTransaction}>Submit</button>
            </div>
    )
}

export default Addtransaction