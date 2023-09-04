import './index.css'

const HomePage = () => (
  <div className="homepage-container">
    <div>
      <div>
        <p className="home-para-1">Discover the beauty of the tropics</p>
        <h1 className="home-heading-1">
          Tropical <br /> Destinations
        </h1>
        <h1 className="home-heading-2">For Student</h1>
      </div>

      <p className="home-para-2">
        Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
        integer rutrum nisi. A nec nisl vitae
      </p>

      <button type="button" className="home-sign-button">
        SIGN UP
      </button>
    </div>
    <div>
      <img
        src="https://imgur.com/EqS47yu.jpg"
        alt="boy-avatar"
        className="boy-image"
      />
    </div>
  </div>
)

export default HomePage
