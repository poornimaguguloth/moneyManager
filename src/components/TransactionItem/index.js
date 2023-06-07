// Write your code here
const TransactionItem = props => {
  const {transactionDetails, deleteTransactionBtn} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteBtn = () => {
    deleteTransactionBtn(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteBtn}
          data-testId="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
