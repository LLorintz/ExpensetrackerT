import { FormEvent, useContext, useState } from "react"
import { GlobalContext } from "../UseContext/UseContext"


const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext)

  const [text,settext]=useState('')
  const [amount,setAmount]=useState(0)

  const handleTextChange=(e:React.ChangeEvent<HTMLInputElement>)=>
  {
    settext(e.target.value)
  }

  const handleAmountChange=(e:React.ChangeEvent<HTMLInputElement>)=>
  {
    setAmount(parseInt(e.target.value))
  }
  
  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault();
    addTransaction({
      id:Math.floor(Math.random()*100000),
      text,
      amount,
    })
    settext('')
    setAmount(0)
  }

  return (
    <form onSubmit={handleSubmit} className="addtransaction">
        <label htmlFor="text">Text</label>
        <input type="text" name="" id="" value={text} onChange={handleTextChange}/>
        <label htmlFor="amount">Amount (negative-expense, positive-income)</label>
        <input type="number"  value={amount} onChange={handleAmountChange}/>
        <button type="submit">Add Transaction</button>
    </form>
  )
}

export default AddTransaction