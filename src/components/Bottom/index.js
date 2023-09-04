import {BsArrowLeft, BsArrowRight, BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'

import ProfileItem from '../ProfileItem'
import DestinationItem from '../DestinationItem'
import TestmonItem from '../TestmonItem'

import './index.css'

const TropicalProfiles = [
  {
    id: 0,
    imageUrl: 'https://imgur.com/6EPG246.jpg',
    name: 'Jenny Wilson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  },
  {
    id: 1,
    imageUrl: 'https://imgur.com/dL27HrQ.jpg',
    name: 'Jenny Wilson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  },
  {
    id: 2,
    imageUrl: 'https://imgur.com/oWlHxqc.jpg',
    name: 'Jenny Wilson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  },
]

const Destinations = [
  {
    id: 0,
    imageUrl: 'https://imgur.com/XPOL25e.jpg',
    universityName: 'Harvard University',
    cityName: 'Cambridge, Massachusetts, UK',
  },
  {
    id: 1,
    imageUrl: 'https://imgur.com/XPOL25e.jpg',
    universityName: 'Oxford University',
    cityName: 'Oxford, England',
  },
  {
    id: 2,
    imageUrl: 'https://imgur.com/XPOL25e.jpg',
    universityName: 'Stanford University',
    cityName: 'Stanford, California',
  },
]

const profilesList = [
  {
    id: 0,
    imageUrl: 'https://imgur.com/7rSO0ib.jpg',
    profileName: 'Corey Korsgaard',
    profileDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 1,
    imageUrl: 'https://imgur.com/frHY2kH.jpg',
    profileName: 'Jakob Aminoff',
    profileDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 2,
    imageUrl: 'https://imgur.com/EuTJCjP.jpg',
    profileName: 'Carla Press',
    profileDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
]

const Bottom = () => (
  <div className="Bottom-container">
    <div className="tropical-container">
      <div>
        <ul>
          {TropicalProfiles.map(profileDetails => (
            <ProfileItem
              key={profileDetails.id}
              profileDetails={profileDetails}
            />
          ))}
        </ul>
      </div>
      <div>
        <h1 className="heading">Tropical Adventure</h1>
        <p className="name1">for Students.</p>
        <p className="name2">Student Tropical Vacation: Relax and Recharge</p>
        <ul className="list-type">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Massa quis natoque sit quam</li>
          <li>Eros non pellentesque elit </li>
          <li>tortor id euismod habitant</li>
          <li>Sed suspendisse id in ultrices</li>
        </ul>
        <button type="button" className="Tropical-button">
          Explore More
        </button>
      </div>
    </div>
    <div className="dest-container">
      <h1 className="dest-heading">Our Destinations</h1>
      <ul className="dest-unord">
        {Destinations.map(each => (
          <DestinationItem key={each.id} details={each} />
        ))}
      </ul>
      <div className="page-cont">
        <BsArrowLeft className="left-arrow" />
        <p className="page-count">
          2<span className="page-span-count">/140</span>
        </p>
        <BsArrowRight className="right-arrow" />
      </div>
    </div>
    <div className="student-cont">
      <div>
        <p className="girl-para">Get 20% off for student</p>
        <p className="girl-para2">
          Student discounts available. <br />
          <span className="girl-span-para">
            Get ready for some fun in the sun!
          </span>
        </p>
        <ul className="list-type">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Massa quis natoque sit quam</li>
          <li>Eros non pellentesque elit </li>
          <li>tortor id euismod habitant</li>
          <li>Sed suspendisse id in ultrices</li>
        </ul>
        <button type="button" className="Tropical-button">
          Explore More
        </button>
      </div>
      <img
        src="https://imgur.com/S5ttwao.jpg"
        alt="girl-avatar"
        className="girl-avatar"
      />
    </div>
    <div className="student-booking-cont">
      <img
        src="https://imgur.com/danDoXC.jpg"
        alt="student-avatar"
        className="student-avatar"
      />
      <div className="booking-container">
        <p className="girl-para2">Book Now</p>
        <p className="girl-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div>
          <label htmlFor="city-name" className="city-label">
            City
          </label>
          <input
            type="text"
            placeholder="enter city name"
            id="city-name"
            className="city-input"
          />
        </div>
        <div className="date-input-cont">
          <div>
            <label htmlFor="city-name" className="city-label">
              Arrival
            </label>
            <input
              type="text"
              placeholder="10 october"
              id="city-name"
              className="date-input"
            />
          </div>
          <div>
            <label htmlFor="city-name" className="city-label">
              Departure
            </label>
            <input
              type="text"
              placeholder="11 october"
              id="city-name"
              className="date-input"
            />
          </div>
        </div>

        <div className="container-book">
          <div>
            <p className="city-label">STAR</p>
            <div className="button-cont">
              <BiMinus className="add-icon" />
              <p className="count-style">4</p>
              <BsPlus className="add-icon" />
            </div>
          </div>
          <div>
            <p className="city-label">ROOM</p>
            <div className="button-cont">
              <BiMinus className="add-icon" />
              <p className="count-style">1</p>
              <BsPlus className="add-icon" />
            </div>
          </div>
        </div>
        <button type="button" className="book-button">
          BOOK NOW
        </button>
      </div>
    </div>
    <div>
      <ul className="dest-unord">
        {profilesList.map(each => (
          <TestmonItem key={each.id} testDetails={each} />
        ))}
      </ul>
    </div>
    <div className="content-container">
      <p className="content-1">
        Student Special: Discounted rates on tropical getaways!
      </p>
      <p className="content-2">
        Let’s embody your beautiful ideas together, simplify the way you
        visualize your next big things.
      </p>
    </div>
    <div className="footer-container">
      <div className="footer-items">
        <p className="footer-word-1">Privacy Policy</p>
        <p className="footer-word-1">Terms of Use</p>
        <p className="footer-word-1">Sales and Refunds</p>
        <p className="footer-word-1">Legal</p>
      </div>
      <div className="footer-items">
        <p className="footer-word-2">About</p>
        <p className="footer-word-2">Schedules</p>
        <p className="footer-word-2">Pricing</p>
        <p className="footer-word-2">Membership</p>
        <p className="footer-word-2">Joins |</p>
      </div>
    </div>
  </div>
)

export default Bottom
