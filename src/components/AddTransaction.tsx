

const AddTransaction = () => {
  return (
    <div className="addtransaction">
        <label htmlFor="text">Text</label>
        <input type="text" name="" id="" />
        <label htmlFor="amount">Amount (negative-expense, positive-income)</label>
        <input type="number" />
        <button>Add Transaction</button>
    </div>
  )
}

export default AddTransaction