import { useContext } from "react"
import Transaction from "./Transaction"
import { GlobalContext } from "../UseContext/UseContext"

const TransactionList = () => {
  
const {transactions} = useContext(GlobalContext)

  return (
    <>
    <h3>History</h3>
    <ul className="list">
      {transactions.map(transaction=>(
        <Transaction {...transaction}></Transaction>
      ))}
    </ul>
    </>
  )
}

export default TransactionList