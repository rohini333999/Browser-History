import './index.css'

const HistoryItem = props => {
  const {eachHistory, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const deleteHistory = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="history-container">
        <div>
          <p className="time-history">{timeAccessed}</p>
        </div>
        <div className="icon-container">
          <div className="icon-text">
            <img src={logoUrl} className="logo" alt="domain logo" />
            <p className="title">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
          <div className="delete-container">
            <button
              className="delete-button"
              type="button"
              onClick={deleteHistory}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                className="delete-logo"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
