// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInput = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter </h1>
          <div className="user-input-container">
            <label htmlFor="user-input" className="input-label">
              Enter the phrase
            </label>
            <input
              type="text"
              id="user-input"
              placeholder="calculator"
              className="user-input"
              onChange={this.onChangeInput}
            />
          </div>
          <div className="count-container">
            <p className="count">No.of letters: {count}</p>
          </div>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator-img"
        />
      </div>
    )
  }
}

export default LettersCalculator
