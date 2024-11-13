import { useContext } from "react"
import { GlobalContext } from "../UseContext/UseContext"
import CountUp from "react-countup"

const Balance = () => {

  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction=>transaction.amount)
  const total = amounts.reduce((total,amount)=>(total+=amount),0).toFixed(2)

  return (
    <div className="balance">
        <h2>Your Balance</h2>
        <h3><CountUp
        start={0}
        end={parseInt(total)}
        duration={1.5}
        prefix="$"
        separator=" "
        decimals={2}></CountUp>
          </h3>
    </div>
  )
}

export default Balance