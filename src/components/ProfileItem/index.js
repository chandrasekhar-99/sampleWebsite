import './index.css'

const ProfileItem = props => {
  const {profileDetails} = props
  const {id, imageUrl, name, description} = profileDetails
  return (
    <li className="list">
      <div className="list-container">
        <img src={imageUrl} alt={id} className="profile" />
        <div>
          <p className="profile-name">{name}</p>
          <p className="profile-description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default ProfileItem
