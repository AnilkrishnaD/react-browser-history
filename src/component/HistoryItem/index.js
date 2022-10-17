import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const testId = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="history">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="name-container">
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <button type="button" className="button" onClick={testId}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
