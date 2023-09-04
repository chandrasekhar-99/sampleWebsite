import './index.css'

const TestmonItem = props => {
  const {testDetails} = props
  const {imageUrl, profileName, profileDescription} = testDetails
  return (
    <li className="test-profile-list">
      <div className="profiles-cont">
        <img src={imageUrl} alt={profileName} className="test-profile" />
        <p className="profile-test-name">{profileName}</p>
        <hr className="profile-line" />
        <p className="profile-test-description">{profileDescription}</p>
      </div>
    </li>
  )
}
export default TestmonItem
