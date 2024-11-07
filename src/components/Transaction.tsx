
type transactionProps={
    id:number,
    text:string,
    amount:number,
}

const Transaction = (props:transactionProps) => {
  return (
    <li className={props.amount>0?'plus':'minus'}>
        {props.text}<span>${props.amount}</span><button>X</button>
    </li>
  )
}

export default Transaction