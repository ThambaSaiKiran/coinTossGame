// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {tossRes: 0, tot: 0, head: 0, tail: 0}

  coinClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    let head = 0
    let tail = 0
    if (tossResult === 0) {
      head += 1
    } else {
      tail += 1
    }
    this.setState(prevState => ({
      tossRes: tossResult,
      tot: prevState.tot + 1,
      head: prevState.head + head,
      tail: prevState.tail + tail,
    }))
  }

  render() {
    const {tossRes, tot, head, tail} = this.state
    const imgUrl =
      tossRes === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg1">
        <div className="bg2">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="tossImg" />
          <button type="button" className="btn" onClick={this.coinClick}>
            Toss Coin
          </button>
          <div className="coinCont">
            <p className="p">Total: {tot}</p>
            <p className="p">Heads: {head}</p>
            <p>Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
