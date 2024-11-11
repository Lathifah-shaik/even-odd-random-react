// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    text: 'Even',
  }

  onIncrement = () => {
    this.setState(prevState => {
      const newCount = prevState.count + Math.ceil(Math.random() * 100)
      return {
        count: newCount,
        text: newCount % 2 === 0 ? 'Even' : 'Odd',
      }
    })
  }

  render() {
    const {count, text} = this.state
    return (
      <div className="container">
        <div className="even-odd-card">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {text}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="range">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
