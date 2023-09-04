// Write your code here
import {HiDotsHorizontal} from 'react-icons/hi'
import './index.css'

const DestinationItem = props => {
  const {details} = props
  const {imageUrl, universityName, cityName} = details
  return (
    <li className="dest-list">
      <div className="dest-list-container">
        <img src={imageUrl} alt={universityName} className="dest-image" />
        <h1 className="uni-name">{universityName}</h1>
        <div className="city-cont">
          <p className="city-name">{cityName}</p>
          <HiDotsHorizontal className="dest-icon" />
        </div>
      </div>
    </li>
  )
}

export default DestinationItem
