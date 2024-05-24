import './index.css'

const CountryItem = props => {
  const {item, updateCountryVisit} = props
  const {name, imageUrl, id} = item
  const onClickRemoveCountryVisit = () => {
    updateCountryVisit(id)
  }
  return (
    <li className="visit-list-item">
      <img className="image" src={imageUrl} alt="thumbnail" />
      <div className="list-content">
        <p className="visited-name">{name}</p>
        <button className="remove-btn" onClick={onClickRemoveCountryVisit}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryItem
