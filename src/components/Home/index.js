// Write your code here
import {Component} from 'react'
import Navbar from '../Navbar'
import HomePage from '../HomePage'
import Bottom from '../Bottom'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <HomePage />
        <Bottom />
      </div>
    )
  }
}

export default Home
