import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headCount: 0,
    tailCount: 0,
  }

  TossCoinResult = () => {
    const {headCount, tailCount} = this.state

    const toss = Math.floor(Math.random() * 2)

    let tossImage = ''

    let latestHeadCount = headCount
    let latestTailCount = tailCount
    if (toss === 0) {
      latestHeadCount += 1
      tossImage = HEADS_IMG_URL
    } else {
      latestTailCount += 1
      tossImage = TAILS_IMG_URL
    }

    this.setState({
      tossResultImage: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {tossResultImage, headCount, tailCount} = this.state

    const totalCount = headCount + tailCount

    return (
      <div className="mainContainer">
        <div className="coinContainer">
          <h1 className="headingStyle">Coin Toss Game</h1>
          <p className="contParagraph">Heads (or) Tails</p>

          <img src={tossResultImage} className="imageSize" alt="toss result" />

          <button
            type="button"
            onClick={this.TossCoinResult}
            className="coin-btn"
          >
            Toss Coin
          </button>

          <div className="paragraphContainer">
            <p className="cParagraph">Total : {totalCount}</p>
            <p className="cParagraph">Heads : {headCount}</p>
            <p className="cParagraph">Tails : {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
