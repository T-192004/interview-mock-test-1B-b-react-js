import './index.css'

const CountryOptionItem = props => {
  const {item, updateCountryVisit} = props
  const {name, isVisited, id} = item
  const onClickUpdateCountryVisit = () => {
    updateCountryVisit(id)
  }
  return (
    <li className="list-item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button
          className="visit-btn"
          type="button"
          onClick={onClickUpdateCountryVisit}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryOptionItem
