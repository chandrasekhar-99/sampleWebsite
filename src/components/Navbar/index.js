import './index.css'

const Navbar = () => (
  <div className="nav-container">
    <div className="nav-one-container">
      <p className="nav-items">Home</p>
      <p className="nav-items">About</p>
      <p className="nav-items">Schedules</p>
      <p className="nav-items">Membership</p>
      <p className="nav-items">Pricing</p>
    </div>
    <div className="nav-two-container">
      <p className="single-nav-item">Offers</p>
      <button type="button" className="nav-button">
        Courses
      </button>
    </div>
  </div>
)

export default Navbar
